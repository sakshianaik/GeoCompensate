import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, Text, Title} from 'react-native-paper';

const showTime = () => {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    );
  }, []);

  return (
    <Card>
      <Card.Content style={styels.clk}>
        <Text variant="headlineMedium">{currentDate}</Text>
        <View style={styels.symb}>
          <View style={styels.iconCont}>
            <Avatar.Icon size={24} style={styels.icon} icon="folder" />
            <Text style={styels.ictxt} variant="labelSmall">Clocked Out </Text>
          </View>
          <View style={styels.iconCont}>
            <Avatar.Icon style={styels.icon} size={24} icon="folder" />
            <Text style={styels.ictxt} variant="labelSmall">Arlington, Texas </Text>
          </View>
        </View>
        <View style={styels.clkIn}>
          <Text style={styels.clkIn1} variant="titleMedium">
            Clock In
          </Text>
          <View style={styels.clkIn2}>
            <Avatar.Icon size={24} icon="folder" />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={styels.viewPunch}>
        <Text variant="bodyMedium">View Punch Activity</Text>
        </View>
      </Card.Content>
    </Card>
  );
};
const styels = StyleSheet.create({
  clk: {
    margin: 40,
    color: 'black',
    backgroundColor: 'grey',
    fontSize: 30,
    borderRadius: 5,
  },
  symb: {
    flexDirection: 'row',
    padding: 1,
  },
  iconCont: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
    marginEnd: 15,
    padding: 2,
  },
  icon: {
    marginEnd: 10,
  },
  ictxt : {
    color : 'white'   
  },
  clkIn: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  clkIn1: {
    backgroundColor: 'blue',
    alignSelf: 'stretch',
    flexDirection: 'column',
    width: '85%',
    textAlign : 'center',
    padding : 10,
    borderTopLeftRadius : 7,
    borderBottomLeftRadius : 7,
    color : 'white',
    marginEnd : 2,
  },
  clkIn2: {
    backgroundColor: 'skyblue',
    padding: 10,
    width: '15%',
    borderTopRightRadius : 7,
    borderBottomEndRadius : 7,
  },
  viewPunch : {
    marginVertical: 5,
    backgroundColor : 'brown',
    width : 'auto',
    padding : 7,
    alignSelf : 'flex-start',
    borderRadius : 5,
  }
});

export default showTime;
