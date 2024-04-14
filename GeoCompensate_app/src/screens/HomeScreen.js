import React, {useEffect} from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Dashboard from './Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import More from './More';
import SearchEmployee from './SearchEmployee';
import Profile from './Profile';
import HRDashboard from './HRDashboard';

const HomeRoute = navigation => <Dashboard navigation={navigation} />;

const HRHomeRoute = navigation => <HRDashboard navigation={navigation} />;

const TimesheetRoute = () => <Text>Timesheet</Text>;

const ProfileRoute = navigation => <Profile navigation={navigation}/>



const MoreRoute = navigation => <More navigation={navigation} />;

const SearchEmployeeRoute = navigation => (
  <SearchEmployee navigation={navigation} />
);

const RegisterEmployeeRoute = navigation => (
  <RegisterEmployee navigation={navigation} />
);

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
    profile: () => {
      return ProfileRoute(navigation);
    },
    timsheet: TimesheetRoute,
    
    more: () => {
      return MoreRoute(navigation);
    },
    searchEmployeeRoute: () => {
      return SearchEmployeeRoute(navigation);
    },
    registerEmployee: () => {
      return RegisterEmployeeRoute(navigation);
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
