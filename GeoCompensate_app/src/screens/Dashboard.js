import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import Header from '../components/molecules/header';
import ClockInBox from '../components/molecules/clockInBox';
import TimingItems from '../components/atoms/timingItems';

const Dashboard = ({navigation}) => {
  const handleLogout = () => {
    AsyncStorage.removeItem('user').then(() => {
      navigation.navigate('Login');
    });
  };

  return (
    <>
      <Header navigation={navigation} />
      <ClockInBox />
      <TimingItems />
    </>
  );
};

export default Dashboard;
