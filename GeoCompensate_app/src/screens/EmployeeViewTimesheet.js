import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import {fetchEmployeeTimesheet} from '../services/timesheet';

const EmployeeViewTimesheet = ({navigation, employeeId}) => {
  const [timesheet, setTimesheet] = React.useState([]);

  React.useEffect(() => {
    fetchEmployeeTimesheet(employeeId).then(res => {
      setTimesheet(res);
    });
  }, []);

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Sr.No</DataTable.Title>
          <DataTable.Title>Date/ Day</DataTable.Title>
          <DataTable.Title numeric>Total Hours</DataTable.Title>
          <DataTable.Title numeric>Pay</DataTable.Title>
        </DataTable.Header>

        {timesheet.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{index + 1}</DataTable.Cell>
            <DataTable.Cell>{item.date}</DataTable.Cell>
            <DataTable.Cell numeric>
              {item.totalHours.toFixed(2)}
            </DataTable.Cell>
            <DataTable.Cell numeric>${item.totalPay.toFixed(2)}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default EmployeeViewTimesheet;
