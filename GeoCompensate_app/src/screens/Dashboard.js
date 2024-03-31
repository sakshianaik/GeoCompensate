import React from 'react';
import Header from '../components/molecules/header';
import ClockInBox from '../components/molecules/clockInBox';
import TimingItems from '../components/atoms/timingItems';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../assets/themes';

const Dashboard = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ClockInBox />
        <TimingItems />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
  },
});

export default Dashboard;
