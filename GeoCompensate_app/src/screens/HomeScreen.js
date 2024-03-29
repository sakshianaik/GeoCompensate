import React, {useEffect} from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Dashboard from './Dashboard';
import EmployeeRegister from './EmployeeRegister'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';

const HomeRoute = navigation => <Dashboard navigation={navigation} />;


const TimesheetRoute = () => <Text>Timesheet</Text>;

const ProfileRoute = () => <Profile />;

const MoreRoute = navigation => <EmployeeRegister navigation={navigation} />;
// const MoreRoute = () => <Text>More</Text>;

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
      key: 'timsheet',
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
    {
      key: 'more',
      title: 'More',
      focusedIcon: 'more',
      unfocusedIcon: 'more',
    },
  ]);

  // useEffect(() => {
  //   AsyncStorage.getItem('user')
  //     .then(value => {
  //       if (value == null) {
  //         navigation.navigate('Login');
  //       }
  //     })
  //     .catch(error => console.error('AsyncStorage error: ', error));
  // }, [navigation]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => {
      return HomeRoute(navigation);
    },
    more: () => {
      return MoreRoute(navigation);
    },
    timsheet: TimesheetRoute,
    profile: ProfileRoute,
    // more: MoreRoute,
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
