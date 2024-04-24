import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Avatar, Card, Text, Button} from 'react-native-paper';
import Clock from 'react-live-clock';
import {Colors} from '../../assets/themes';
import Geolocation from '@react-native-community/geolocation';
import {fetchCompany} from '../../services/company';
import {
  checkClockedIn,
  clockIn,
  clockOut,
  pingUserLocation,
} from '../../services/timesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {format} from 'date-fns';

const ClockInBox = ({navigation, changeTimeSheet}) => {
  const [clockedIn, setClockedIn] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [companyLocation, setCompanyLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [user, setUser] = useState();
  const [timesheetData, setTimeSheet] = useState({});

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const checkLocation = (lat1, lon1) => {
    let result = false;
    if (lat1 && lon1) {
      const distance = calculateDistance(
        lat1,
        lon1,
        companyLocation?.latitude,
        companyLocation?.longitude,
      );

      const thresholdDistance = 0.1; // in kilometers
      if (distance <= thresholdDistance) {
        result = true;
      }
    }
    return result;
  };

  // Get the current location
  const getCurrentLocation = () => {
    let result = false;
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setUserLocation({latitude, longitude});
          console.log(latitude, longitude, companyLocation);
          result = checkLocation(latitude, longitude);
          resolve(result);
        },
        error => {
          console.error(error.message);
          reject(error);
        },
        {enableHighAccuracy: true},
      );
    });
  };

  const checkClockIn = async () => {
    const data = {
      employeeId: user.employeeId,
      date: format(new Date(), 'yyyy-MM-dd'),
    };
    const result = await checkClockedIn(data);
    return result;
    // return false;
  };

  let pingLocation = () => {
    getCurrentLocation().then(result => {
      if (result) {
        //API call to update clock-out time.
        let payload = {
          employeeId: user?.employeeId,
          date: format(new Date(), 'yyyy-MM-dd'),
          clockOut: new Date().toISOString(),
        };
        pingUserLocation(payload).then(res => {
          console.log('Ping: Employee is inside the company.');
        });
      } else {
        console.log('Ping: Employee is outside the company.');
        // API call to clock-out as user was outside location.
        let payload = {
          employeeId: user?.employeeId,
          date: format(new Date(), 'yyyy-MM-dd'),
          clockOut: new Date().toISOString(),
        };
        setTimeSheet({...timesheetData, clockOut: new Date().toISOString()});
        changeTimeSheet({
          ...timesheetData,
          clockOut: new Date().toISOString(),
        });

        clockOut(payload).then(res => {
          setClockedIn(0);
          clearInterval(intervalId);
        });
      }
    });
  };

  const validateClockIn = async () => {
    const isClockedIn = await checkClockIn();
    setTimeSheet(isClockedIn);
    changeTimeSheet(isClockedIn);
    if (isClockedIn) {
      setClockedIn(1);
      getCurrentLocation().then(async result => {
        if (result) {
          const id = setInterval(pingLocation, 15000);
          setIntervalId(id);
        } else {
          //API call for clock out
          let payload = {
            employeeId: user?.employeeId,
            date: format(new Date(), 'yyyy-MM-dd'),
            clockOut: new Date().toISOString(),
          };
          clockOut(payload).then(res => {
            setClockedIn(0);
            clearInterval(intervalId);
            Alert.alert('Success', 'You are successfully clocked out.');
          });
        }
      });
    }
  };

  const onClockClick = () => {
    if (clockedIn == 0) {
      getCurrentLocation().then(async result => {
        if (result) {
          setTimeSheet({clockIn: new Date().toISOString()});
          changeTimeSheet({clockIn: new Date().toISOString()});
          //API call for clock in
          let payload = {
            employeeId: user?.employeeId,
            date: format(new Date(), 'yyyy-MM-dd'),
            clockIn: new Date().toISOString(),
            clockOut: new Date().toISOString(),
            clockedLocation: [userLocation?.latitude, userLocation?.longitude],
          };
          clockIn(payload).then(res => {
            setClockedIn(1);
            const id = setInterval(pingLocation, 15000);
            setIntervalId(id);
            Alert.alert('Success', 'You are successfully clocked in.');
          });
        } else {
          Alert.alert('Attention', 'You are out of company location.');
        }
      });
    } else {
      setTimeSheet({...timesheetData, clockOut: new Date().toISOString()});
      changeTimeSheet({...timesheetData, clockOut: new Date().toISOString()});
      //API call for clock out
      let payload = {
        employeeId: user?.employeeId,
        date: format(new Date(), 'yyyy-MM-dd'),
        clockOut: new Date().toISOString(),
      };
      clockOut(payload).then(res => {
        setClockedIn(0);
        clearInterval(intervalId);
        Alert.alert('Success', 'You are successfully clocked out.');
      });
    }
  };

  const getCompanyLocation = async () => {
    return fetchCompany('6611bb23eb62f58db5dd82fe').then(data => {
      setCompanyLocation({
        latitude: data.companyLocation[0],
        longitude: data.companyLocation[1],
      });
    });
  };

  useEffect(() => {
    if (user == null || companyLocation == null) {
      AsyncStorage.getItem('user')
        .then(async value => {
          if (value == null) {
            navigation.navigate('Login');
          } else {
            setUser(JSON.parse(value));
            await getCompanyLocation();
          }
        })
        .catch(error => console.error('AsyncStorage error: ', error));
    } else {
      validateClockIn();
    }
  }, [companyLocation]);

  return (
    <>
      <Text style={styles.hdrTitle}>Home</Text>
      <View>
        <Text style={styles.welcome}>Welcome, {user?.firstName}!</Text>
      </View>
      <Card style={styles.card} elevation={0}>
        <Card.Content style={styles.clk}>
          <Text variant="headlineMedium">
            <Clock
              style={styles.clockTime}
              element={Text}
              format={'HH:mm:ss'}
              ticking={true}
              timezone={'US/Central'}
            />
          </Text>
          <View style={styles.symb}>
            <View style={styles.iconCont}>
              <Avatar.Icon size={30} style={styles.icon} icon="clock" />
              <Text style={styles.ictxt} variant="labelSmall">
                {clockedIn == 0 ? 'Clocked out' : 'Clocked in'}
              </Text>
            </View>
            <View style={styles.iconCont}>
              <Avatar.Icon style={styles.icon} size={30} icon="pin" />
              <Text style={styles.ictxt} variant="labelSmall">
                Arlington, Texas
              </Text>
            </View>
          </View>
          <View style={styles.borderBottom} />
          <View style={styles.clkIn}>
            <Button style={styles.clkIn1} onPress={onClockClick}>
              <Text variant="titleMedium">
                {clockedIn == 0 ? 'Clock in' : 'Clock out'}
              </Text>
            </Button>
          </View>
        </Card.Content>
      </Card>
    </>
  );
};
const styles = StyleSheet.create({
  hdrTitle: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
  },
  welcome: {
    textAlign: 'center',
    fontSize: 30,
  },
  card: {
    padding: 10,
    margin: 10,
  },
  clk: {
    margin: 20,
    color: Colors.black,
    backgroundColor: Colors.grayBlue,
    fontSize: 30,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  clockTime: {
    fontSize: 30,
    fontWeight: '800',
    color: Colors.black,
  },
  symb: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  iconCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: 15,
    padding: 2,
  },
  icon: {
    marginEnd: 10,
    backgroundColor: Colors.grayBlue,
    color: Colors.black,
    fontSize: 20,
  },
  ictxt: {
    color: Colors.black,
    fontSize: 13,
  },
  clkIn: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  clkIn1: {
    backgroundColor: Colors.white,
    alignSelf: 'stretch',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    color: Colors.black,
    marginEnd: 2,
  },
  clkIn2: {
    backgroundColor: Colors.white,
    fontWeight: 'bold',
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
    color: Colors.white,
    icon: {
      backgroundColor: Colors.white,
      color: Colors.black,
      fontSize: 80,
    },
  },
});

export default ClockInBox;
