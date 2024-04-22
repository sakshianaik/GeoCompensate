import {DataTable, IconButton} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import {fetchHRViewTimesheet} from '../services/timesheet';
import {format} from 'date-fns';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../assets/themes';

const HRViewTimesheet = ({route}) => {
  const employeeId = route.params.data;
  const [expandedRows, setExpandedRows] = useState([]);
  const [timesheetData, setTimesheetData] = useState([]);

  useEffect(() => {
    fetchHRViewTimesheet(employeeId).then(result => {
      setTimesheetData(result);
    });
  }, []);

  const toggleRowExpansion = rowId => {
    const isExpanded = expandedRows.includes(rowId);
    if (isExpanded) {
      setExpandedRows(expandedRows.filter(id => id !== rowId));
    } else {
      setExpandedRows([...expandedRows, rowId]);
    }
  };

  return (
    <DataTable>
      <DataTable.Header style={styles.header}>
        <DataTable.Title>
          <Text style={styles.title}>Date </Text>
        </DataTable.Title>
        <DataTable.Title>
          <Text style={styles.title}>Hours worked</Text>
        </DataTable.Title>
        <DataTable.Title>
          <Text style={styles.title}>Pay</Text>
        </DataTable.Title>
        <DataTable.Title> </DataTable.Title>
      </DataTable.Header>
      <View style={styles.container}>
        {timesheetData !== undefined &&
          timesheetData.length > 0 &&
          timesheetData.map((row, index) => (
            <React.Fragment key={index}>
              <DataTable.Row onPress={() => toggleRowExpansion(index)}>
                <DataTable.Cell>{row.date}</DataTable.Cell>
                <DataTable.Cell>{row.totalHours.toFixed(2)}</DataTable.Cell>
                <DataTable.Cell>{row.totalPay.toFixed(2)}</DataTable.Cell>
                <DataTable.Cell>
                  <IconButton
                    icon={
                      expandedRows.includes(index)
                        ? 'chevron-up'
                        : 'chevron-down'
                    }
                    onPress={() => toggleRowExpansion(index)}
                  />
                </DataTable.Cell>
              </DataTable.Row>

              <View style={styles.expandableContainer}>
                {expandedRows.includes(index) && (
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title>
                        <Text style={styles.title}>Clock In</Text>
                      </DataTable.Title>
                      <DataTable.Title>
                        <Text style={styles.title}>Clock Out</Text>
                      </DataTable.Title>
                      <DataTable.Title>
                        <Text style={styles.title}>Worked Hours</Text>
                      </DataTable.Title>
                    </DataTable.Header>
                    {timesheetData[index].rows !== undefined &&
                      timesheetData[index].rows.length > 0 &&
                      timesheetData[index].rows.map((expandableRow, eindex) => (
                        <DataTable.Row key={eindex}>
                          <DataTable.Cell>
                            {format(expandableRow.clockIn, 'HH:mm:ss')}
                          </DataTable.Cell>
                          <DataTable.Cell>
                            {format(expandableRow.clockOut, 'HH:mm:ss')}
                          </DataTable.Cell>
                          <DataTable.Cell>
                            {expandableRow.totalHours.toFixed(2)}
                          </DataTable.Cell>
                        </DataTable.Row>
                      ))}
                  </DataTable>
                )}
              </View>
            </React.Fragment>
          ))}
      </View>
    </DataTable>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.lightPurple,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 13,
  },
  center: {
    flex: 1,
    textAlign: 'center',
  },
  container: {
    backgroundColor: Colors.white,
  },
  expandableContainer: {
    backgroundColor: Colors.lightPurple,
    color: Colors.white,
    paddingLeft: 30,
  },
});

export default HRViewTimesheet;
