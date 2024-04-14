import React, {useEffect} from 'react';
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

const ProfileRoute = navigation => <Profile navigation={navigation} />;

const HomeScreen = ({navigation}) => {
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
        if (value == null) {
          navigation.navigate('Login');
        }
      })
      .catch(error => console.error('AsyncStorage error: ', error));
  }, [navigation]);

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
      return ProfileRoute(navigation);
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
