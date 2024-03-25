import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, Text, Title} from 'react-native-paper';
import Clock from 'react-live-clock';
import {Colors} from '../../assets/themes';

const ClockInBox = () => {
  return (
    <Card
      style={{borderRadius: 0, backgroundColor: Colors.grayBlue, padding: 10}}>
      <Card.Content style={styels.clk}>
        <Text variant="headlineMedium">
          <Clock
            style={styels.clockTime}
            element={Text}
            format={'HH:mm:ss'}
            ticking={true}
            timezone={'US/Central'}
          />
        </Text>

        <View style={styels.symb}>
          <View style={styels.iconCont}>
            <Avatar.Icon size={24} style={styels.icon} icon="clock" />
            <Text style={styels.ictxt} variant="labelSmall">
              Clocked Out{' '}
            </Text>
          </View>
          <View style={styels.iconCont}>
            <Avatar.Icon style={styels.icon} size={24} icon="pin" />
            <Text style={styels.ictxt} variant="labelSmall">
              Arlington, Texas{' '}
            </Text>
          </View>
        </View>
        <View style={styels.borderBottom} />
        <View style={styels.clkIn}>
          <Text style={styels.clkIn1} variant="titleMedium">
            Clock In
          </Text>
          <View style={styels.clkIn2}>
            <Avatar.Icon size={24} icon="folder" />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};
const styels = StyleSheet.create({
  clk: {
    margin: 40,
    color: 'black',
    backgroundColor: Colors.black,
    fontSize: 30,
    borderRadius: 10,
  },
  clockTime: {
    fontSize: 30,
    fontWeight: '800',
    color: Colors.white,
  },
  borderBottom: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
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
  },
  ictxt: {
    color: 'white',
    fontSize: 13,
  },
  clkIn: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  clkIn1: {
    backgroundColor: Colors.darkGrayBlue,
    alignSelf: 'stretch',
    flexDirection: 'column',
    width: '85%',
    textAlign: 'center',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    color: 'black',
    marginEnd: 2,
  },
  clkIn2: {
    backgroundColor: Colors.aquaBlue,
    padding: 10,
    width: '15%',
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
  },
});

export default ClockInBox;
