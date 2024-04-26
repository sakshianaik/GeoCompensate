import React, {useState} from 'react';
import Header from '../components/molecules/header';
import ClockInBox from '../components/molecules/clockInBox';
import TimingItems from '../components/atoms/timingItems';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../assets/themes';

const Dashboard = ({navigation}) => {
  const [timesheetData, setTimeSheet] = useState({});

  const changeTimeSheet = data => {
    setTimeSheet(data);
  };
  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ClockInBox navigation={navigation} changeTimeSheet={changeTimeSheet} />
        <TimingItems timesheetData={timesheetData} />
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
