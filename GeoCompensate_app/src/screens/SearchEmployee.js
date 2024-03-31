import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DataTable, Searchbar} from 'react-native-paper';
import MenuBox from '../components/atoms/menuBox';
import {Colors} from '../assets/themes';

const SearchEmployee = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([10, 5]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  const [items] = React.useState([
    {
      key: 1,
      employeeId: 1200,
      name: 'John Smith',
    },
    // {
    //   key: 2,
    //   employeeId: 1201,
    //   name: 'Delton Oberoi',
    // },
    // {
    //   key: 3,
    //   employeeId: 1202,
    //   name: 'Trey Brown ',
    // },
    // {
    //   key: 4,
    //   employeeId: 1203,
    //   name: 'William Johnson',
    // },
    // {
    //   key: 5,
    //   employeeId: 1100,
    //   name: 'Robin Davis',
    // },
    // {
    //   key: 6,
    //   employeeId: 1900,
    //   name: 'Christine Miller',
    // },
    // {
    //   key: 7,
    //   employeeId: 1810,
    //   name: 'Renai Jones',
    // },
    // {
    //   key: 8,
    //   employeeId: 1230,
    //   name: 'Greg Garcia',
    // },
    // {
    //   key: 9,
    //   employeeId: 1010,
    //   name: 'Thomas Cook',
    // },
    // {
    //   key: 10,
    //   employeeId: 1923,
    //   name: 'Jen Lopez',
    // },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <DataTable style={{zIndex: -1, position: 'relative'}}>
        <DataTable.Header>
          <DataTable.Title>Employee ID</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title style={styles.center}>More</DataTable.Title>
        </DataTable.Header>

        {items.slice(from, to).map(item => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.employeeId}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell style={styles.center}>
              <MenuBox />
            </DataTable.Cell>
          </DataTable.Row>
        ))}

        {/* <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={page => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        /> */}
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
