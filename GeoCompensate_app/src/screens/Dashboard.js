import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Button} from 'react-native-paper';

const Dashboard = ({navigation}) => {
  const handleLogout = () => {
    AsyncStorage.removeItem('user').then(() => {
      navigation.navigate('Login');
    });
  };

  return <Button onPress={handleLogout}>Logout</Button>;
};

export default Dashboard;
