import * as React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Menu, Button, Avatar, PaperProvider} from 'react-native-paper';
import {Colors} from '../../assets/themes';
import {relieveEmployee} from '../../services/employee';

const MenuBox = ({navigation, employeeId, employees, setEmployees}) => {
  const [visible, setVisible] = React.useState(false);
  const [menuAnchor, setMenuAnchor] = React.useState({x: 0, y: 0});
  const openMenu = event => {
    const {nativeEvent} = event;
    const anchor = {
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    };

    setMenuAnchor(anchor);
    setVisible(true);
  };
  const closeMenu = event => {
    setVisible(false);
  };

  const removeEmployee = empId => {
    relieveEmployee(empId);
    const filteredEmployees = employees.filter(
      item => item.employeeId !== empId,
    );
    setEmployees(filteredEmployees);
  };

  const items = [
    {
      key: 1,
      name: 'Edit',
      action: () => {
        return Alert.alert(
          'Edit Employee',
          'Are you sure you want to edit employee?',
          [
            {
              text: 'Cancel',
              onPress: () => {},
            },
            {text: 'Edit', onPress: () => {}},
          ],
        );
      },
    },
    {
      key: 2,
      name: 'Relieve',
      action: () => {
        return Alert.alert(
          'Relieve Employee',
          'Are you sure you want to relieve employee?',
          [
            {
              text: 'Cancel',
              onPress: () => {},
            },
            {
              text: 'Relieve',
              onPress: () => {
                removeEmployee(employeeId);
              },
            },
          ],
        );
      },
    },
    {
      key: 3,
      name: 'View timesheet',
      action: () => {
        navigation.navigate('View Timesheet', {data: employeeId});
      },
    },
  ];
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={{flex: 8}}>
            <Menu
              style={styles.menu}
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Button onPress={openMenu}>
                  <Avatar.Icon
                    style={styles.moreIcon}
                    size={30}
                    icon="dots-vertical"
                  />
                </Button>
              }>
              {/* <View style={{backgroundColor: Colors.danger, flex: 1}}> */}
              {items.map(item => (
                <Menu.Item
                  key={item.key}
                  style={styles.menuItem}
                  onPress={item.action}
                  title={item.name}
                />
              ))}
              {/* </View> */}
            </Menu>
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    width: '100%',
    justifyContent: 'center',
    // zIndex: 100,
  },
  menu: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    top: 20,
    left: 20,
    height: 20,
    maxHeight: 20,
    zIndex: 9999,
  },
  menuItem: {
    color: Colors.black,
  },
  moreIcon: {
    color: Colors.black,
  },
});

export default MenuBox;
