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
          <View style={styling.clockInBorder} />
          <Text style={styling.time}>5:29 AM</Text>
        </View>
        <View style={styling.clkItem}>
          <Text style={styling.clkItemTitle} variant="labelMedium">
            Meal Start
          </Text>
          <View style={styling.mealStartBorder} />
          <Text style={styling.time}>10:42 AM</Text>
        </View>
        <View style={styling.clkItem}>
          <Text style={styling.clkItemTitle} variant="labelMedium">
            Meal End
          </Text>
          <View style={styling.mealEndBorder} />
          <Text style={styling.time}>11:18 AM</Text>
        </View>
        <View style={styling.clkItem}>
          <Text style={styling.clkItemTitle} variant="labelMedium">
            Clock Out
          </Text>
          <View style={styling.clockOutBorder} />
          <Text style={styling.time}>1:29 PM</Text>
        </View>
      </View>
      <Text style={styling.payTitle} variant="headlineSmall">
        Pay Period : Mar 15 - Mar 21
      </Text>
      <View style={styling.payPeriod}>
        <View style={styling.payItems}>
          <View style={styling.payItem}>
            <Text style={styling.pyItTitle}>Worked Hours</Text>
            <View style={styling.pyItCont}>
              <Text style={styling.pyItIcon}>Ic</Text>
              <Text style={styling.pyItContaPrc}>19.667</Text>
            </View>
          </View>
          <View style={styling.payItem}>
            <Text style={styling.pyItTitle}>Weekly Earnings</Text>
            <View style={styling.pyItCont}>
              <Text style={styling.pyItIcon}>$125.53</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styling = StyleSheet.create({
  timeShowFour: {
    backgroundColor: Colors.lavender,
    marginHorizontal: 10,
    borderRadius: 4,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: Colors.black,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  clkItemTitle: {
    fontSize: 15,
    fontWeight: '900',
  },
  btmBorderTime: {
    borderBottomColor: Colors.black,
    borderWidth: 1,
    fontWeight: '800',
    marginVertical: 2,
  },
  clockInBorder: {
    borderBlockColor: Colors.darkGrayBlue,
    borderWidth: 2,
  },
  clockOutBorder: {
    borderBlockColor: Colors.purpleBlue,
    borderWidth: 2,
  },
  mealStartBorder: {
    borderBlockColor: Colors.burgandy,
    borderWidth: 2,
  },
  mealEndBorder: {
    borderBlockColor: Colors.teal,
    borderWidth: 2,
  },
  time: {
    fontSize: 20,
    paddingVertical: 2,
    textAlign: 'center',
  },
  payTitle: {
    textAlign: 'center',
    paddingVertical: 10,
    marginVertical: 30,
  },
  payItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
  },
  payItem: {
    backgroundColor: Colors.grayBlue,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    width: 150,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pyItCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  pyItTitle: {
    fontWeight: 900,
    fontSize: 15,
    color: Colors.black,
  },
  pyItIcon: {
    fontWeight: 800,
    fontSize: 20,
    color: Colors.black,
  },
  pyItContaPrc: {
    fontWeight: 800,
    fontSize: 20,
    color: Colors.black,
  },
});
export default TimingItems;
