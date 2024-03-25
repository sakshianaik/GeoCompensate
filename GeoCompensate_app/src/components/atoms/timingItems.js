import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Colors} from '../../assets/themes';

const TimingItems = () => {
  return (
    <>
      <View style={styling.timeShowFour}>
        <View style={styling.clkItem}>
          <Text style={styling.clkItemTitle} variant="labelMedium">
            Clock In
          </Text>
          <View style={styling.btmBorderTime}></View>
          <Text style={styling.time}>5:29 AM</Text>
        </View>
        <View style={styling.clkItem}>
          <Text style={styling.clkItemTitle} variant="labelMedium">
            Meal Start
          </Text>
          <View style={styling.btmBorderTime}></View>
          <Text style={styling.time}>10:42 AM</Text>
        </View>
        <View style={styling.clkItem}>
          <Text style={styling.clkItemTitle} variant="labelMedium">
            Meal End
          </Text>
          <View style={styling.btmBorderTime}></View>
          <Text style={styling.time}>11:18 AM</Text>
        </View>
        <View style={styling.clkItem}>
          <Text style={styling.clkItemTitle} variant="labelMedium">
            Clock Out
          </Text>
          <View style={styling.btmBorderTime}></View>
          <Text style={styling.time}>1:29 PM</Text>
        </View>
      </View>
      <View style={styling.btmLongBorder}></View>
      <View style={styling.payPeriod}>
        <Text style={styling.payTitle} variant="headlineSmall">
          Pay Period : Mar 15 - Mar 21
        </Text>
        <View style={styling.payItems}>
          <View style={styling.payItem}>
            <Text style={styling.pyItTitle}>Scheduled Hours</Text>
            <View style={styling.pyItCont}>
              <Text style={styling.pyItIcon}>Ic</Text>
              <Text style={styling.pyItContaPrc}>19.667</Text>
            </View>
          </View>
          <View style={styling.payItem}>
            <Text style={styling.pyItTitle}>Income/Week</Text>
            <View style={styling.pyItCont}>
              <Text style={styling.pyItIcon}>$</Text>
              <Text style={styling.pyItContaPrc}>125.53</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styling = StyleSheet.create({
  timeShowFour: {
    backgroundColor: Colors.darkGrayBlue,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  clkItem : {
    padding : 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  clkItemTitle: {
    fontSize : 15,
    fontWeight : '900',
    color : Colors.white,
  },
  btmBorderTime: {
    borderBottomColor: 'black',
    borderWidth: 2,
    fontWeight : '800',
    marginVertical: 2,
  },
  time: {
    fontSize : 20,
    paddingVertical: 2,
    textAlign : 'center',
    
  },
  btmLongBorder: {
    borderWidth: 2,
    borderBottomColor: 'grey',
  },
  payPeriod: {
    marginVertical: 20,
  },
  payTitle: {
    textAlign: 'center',
    paddingVertical : 10,
  }, 
  payItems : {
    flexDirection : 'row',
    justifyContent : 'space-around',
  },
  payItem : {
    backgroundColor : Colors.black,
    padding : 5,
    borderRadius : 5,
  },
  pyItCont : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    paddingHorizontal : 5,
  },
  pyItTitle : {
    fontWeight : 800,
    fontSize : 15,
    color : Colors.blue,
  },
  pyItIcon : {
    fontSize : 20,
    color : Colors.white,
  },
  pyItContaPrc : {
    fontWeight : 900,
    fontSize : 20,
    color : Colors.white,
  }
});
export default TimingItems;
