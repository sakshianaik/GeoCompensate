import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;

const PayRoute = () => <Text>Pay</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const AlertRoute = () => <Text>Alert</Text>;

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'pay',
      title: 'Pay',
      focusedIcon: 'cash',
      unfocusedIcon: 'cash',
    },
    {
      key: 'profile',
      title: 'Profile',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
    {
      key: 'alert',
      title: 'Alert',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    pay: PayRoute,
    profile: ProfileRoute,
    alert: AlertRoute,
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
