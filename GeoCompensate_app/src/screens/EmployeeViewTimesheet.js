import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

const EmployeeViewTimesheet = ({navigation}) => {
  const [dataToSend] = React.useState([
    {
      key: 1,
      DateDay: '01/04- Mon',
      totaHours: 4,
      pay: 40,
    },
    {
      key: 2,
      DateDay: '02/04- Tue',
      totaHours: 6,
      pay: 60,
    },
    {
      key: 3,
      DateDay: '03/04- Wed',
      totaHours: 4,
      pay: 40,
    },
    {
      key: 4,
      DateDay: '04/04- Thur',
      totaHours: 5,
      pay: 50,
    },
    {
      key: 5,
      DateDay: '05/04- Fri',
      totaHours: 7,
      pay: 70,
    },
    {
      key: 6,
      DateDay: '02/04- Tue',
      totaHours: 6,
      pay: 60,
    },
    {
      key: 7,
      DateDay: '03/04- Wed',
      totaHours: 4,
      pay: 40,
    },
    {
      key: 8,
      DateDay: '04/04- Thur',
      totaHours: 5,
      pay: 50,
    },
    {
      key: 9,
      DateDay: '05/04- Fri',
      totaHours: 7,
      pay: 70,
    },
    {
      key: 10,
      DateDay: '02/04- Tue',
      totaHours: 6,
      pay: 60,
    },
    {
      key: 11,
      DateDay: '03/04- Wed',
      totaHours: 4,
      pay: 40,
    },
    {
      key: 12,
      DateDay: '04/04- Thur',
      totaHours: 5,
      pay: 50,
    },
    {
      key: 13,
      DateDay: '05/04- Fri',
      totaHours: 7,
      pay: 70,
    },
    {
      key: 14,
      DateDay: '02/04- Tue',
      totaHours: 6,
      pay: 60,
    },
    {
      key: 15,
      DateDay: '03/04- Wed',
      totaHours: 4,
      pay: 40,
    },
  ]);
  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Sr.No</DataTable.Title>
          <DataTable.Title>Date/ Day</DataTable.Title>
          <DataTable.Title numeric>Total Hours</DataTable.Title>
          <DataTable.Title numeric>Pay</DataTable.Title>
        </DataTable.Header>

        {dataToSend.slice().map(dataToSend => (
          <DataTable.Row key={dataToSend.key}>
            <DataTable.Cell>{dataToSend.key}</DataTable.Cell>
            <DataTable.Cell>{dataToSend.DateDay}</DataTable.Cell>
            <DataTable.Cell numeric>{dataToSend.totaHours}</DataTable.Cell>
            <DataTable.Cell numeric>{dataToSend.pay}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default EmployeeViewTimesheet;
