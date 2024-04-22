import React from 'react';
import {StyleSheet} from 'react-native';
import {DataTable, Searchbar} from 'react-native-paper';
import MenuBox from '../components/atoms/menuBox';
import {fetchEmployee} from '../services/employee';

const SearchEmployee = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const [employees, setEmployees] = React.useState([]);

  const searchEmployee = async () => {
    if (searchQuery.length > 0) {
      const data = await fetchEmployee(searchQuery);
      setEmployees(data);
    }
  };

  React.useEffect(() => {
    setSearchQuery();
  }, []);

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        onIconPress={searchEmployee}
      />
      <DataTable style={{zIndex: -1, position: 'relative'}}>
        <DataTable.Header>
          <DataTable.Title>Employee ID</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title style={styles.center}>More</DataTable.Title>
        </DataTable.Header>

        {employees?.map((item, key) => (
          <DataTable.Row key={key}>
            <DataTable.Cell>{item.employeeId}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell style={styles.center}>
              <MenuBox navigation={navigation} employeeId={item.employeeId} />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    margin: 15,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SearchEmployee;
