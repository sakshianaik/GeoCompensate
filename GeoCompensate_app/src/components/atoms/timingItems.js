import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {Colors} from '../../assets/themes';
import {
  endOfWeek,
  format,
  isValid,
  isWithinInterval,
  parseISO,
  startOfWeek,
  subWeeks,
} from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchEmployeeTimesheet} from '../../services/timesheet';

const TimingItems = ({timesheetData}) => {
  const [totalHours, setHours] = React.useState(0);
  const [totalPay, setPay] = React.useState(0);
  const [startOfTwoWeeksAgo, setStartDate] = React.useState(null);
  const [endOfLastWeek, setEndDate] = React.useState(null);
  React.useEffect(() => {
    const today = new Date();
    const twoWeeksAgo = subWeeks(today, 1);
    setStartDate(startOfWeek(twoWeeksAgo));
    setEndDate(endOfWeek(today));

    AsyncStorage.getItem('user')
      .then(value => {
        value = JSON.parse(value);
        if (value != null) {
          fetchEmployeeTimesheet(value?.employeeId).then(res => {
            if (res && res.length > 0) {
              const sum = res
                .filter(item =>
                  isWithinInterval(parseISO(item.date), {
                    start: startOfTwoWeeksAgo,
                    end: endOfLastWeek,
                  }),
                )
                .reduce(
                  (acc, curr) => {
                    acc.totalPay += curr.totalPay;
                    acc.totalHours += curr.totalHours;
                    return acc;
                  },
                  {totalPay: 0, totalHours: 0},
                );
              setPay(sum.totalPay.toFixed(2));
              setHours(sum.totalHours.toFixed(2));
              console.log(sum);
            }
          });
        }
      })
      .catch(error => console.error('AsyncStorage error: ', error));
  }, [timesheetData]);
  return (
    <>
      <View style={styling.timeShowFour}>
        <View style={styling.clkItem}>
          <Text style={styling.clkItemTitle} variant="labelMedium">
            Clock In
          </Text>
          <View style={styling.clockInBorder} />
          <Text style={styling.time}>
            {timesheetData?.clockIn == null
              ? '-'
              : format(timesheetData?.clockIn, 'HH:mm:ss')}
          </Text>
        </View>
        <View style={styling.clkItem}>
          <Text style={styling.clkItemTitle} variant="labelMedium">
            Clock Out
          </Text>
          <View style={styling.mealStartBorder} />
          <Text style={styling.time}>
            {timesheetData?.clockOut == null
              ? '-'
              : format(timesheetData?.clockOut, 'HH:mm:ss')}
          </Text>
        </View>
        {/* <View style={styling.clkItem}>
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
        </View> */}
      </View>
      <Text style={styling.payTitle} variant="headlineSmall">
        Pay Period : 
        {isValid(startOfTwoWeeksAgo)
          ? format(startOfTwoWeeksAgo, 'MMM dd')
          : ''}
         - {isValid(endOfLastWeek) ? format(endOfLastWeek, 'MMM dd') : ''}
      </Text>
      <View style={styling.payPeriod}>
        <View style={styling.payItems}>
          <View style={styling.payItem}>
            <Text style={styling.pyItTitle}>Worked Hours</Text>
            <View style={styling.pyItCont}>
              <Text style={styling.pyItIcon}>
                <Text style={styling.pyItContaPrc}>{totalHours}</Text>
              </Text>
            </View>
          </View>
          <View style={styling.payItem}>
            <Text style={styling.pyItTitle}>Weekly Earnings</Text>
            <View style={styling.pyItCont}>
              <Text style={styling.pyItIcon}>${totalPay}</Text>
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
