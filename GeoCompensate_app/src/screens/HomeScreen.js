import React, {useEffect, useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Dashboard from './Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';
import HRDashboard from './HRDashboard';
import EmployeeViewTimesheet from './EmployeeViewTimesheet';

const HomeRoute = navigation => <Dashboard navigation={navigation} />;

const HRHomeRoute = navigation => <HRDashboard navigation={navigation} />;

const TimesheetRoute = navigation => (
  <EmployeeViewTimesheet navigation={navigation} />
);

const ProfileRoute = (navigation, empId, isHR) => (
  <Profile navigation={navigation} employeeId={empId} isHR={isHR} />
);

const HomeScreen = ({navigation}) => {
  const [empID, setEmpID] = useState('');
  const [isHR, setisHR] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'timesheet',
      title: 'Timsheet',
      focusedIcon: 'clock-time-three',
      unfocusedIcon: 'clock-time-three-outline',
    },
    {
      key: 'profile',
      title: 'Profile',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
  ]);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(value => {
        value = JSON.parse(value);
        if (value == null) {
          navigation.navigate('Login');
        } else {
          setEmpID(value?.employeeId);
          setisHR(value?.type.toLowerCase() === 'hr');
        }
      })
      .catch(error => console.error('AsyncStorage error: ', error));
  }, [navigation, empID]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => {
      return HomeRoute(navigation);
    },
    hRHomeRoute: () => {
      return HRHomeRoute(navigation);
    },
    timesheet: () => {
      return TimesheetRoute(navigation);
    },
    profile: () => {
      console.log('profile empID', empID);
      return ProfileRoute(navigation, empID, isHR);
    },
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default HomeScreen;
