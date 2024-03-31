import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, Text} from 'react-native-paper';
import Clock from 'react-live-clock';
import {Colors} from '../../assets/themes';

const ClockInBox = () => {
  return (
    <>
      <Text style={styles.hdrTitle}>Home</Text>
      <View>
        <Text style={styles.welcome}>Welcome, Nandish!</Text>
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
                Clocked Out
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
            <Text style={styles.clkIn1} variant="titleMedium">
              Clock In
            </Text>
            <View style={styles.clkIn2}>
              <Avatar.Icon
                style={styles.clkIn2.icon}
                size={30}
                icon="dots-horizontal"
              />
            </View>
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
    width: '85%',
    textAlign: 'center',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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
