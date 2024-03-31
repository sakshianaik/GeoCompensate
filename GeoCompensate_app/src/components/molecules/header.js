import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import {Alert, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Button, Icon, Divider} from 'react-native-paper';

const Header = ({navigation}) => {
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          AsyncStorage.removeItem('user').then(() => {
            navigation.navigate('Login');
          });
        },
      },
    ]);
  };

  return (
    <>
      <View styles={styles.hdr}>
        <View style={styles.headerContainer}>
          <View style={styles.icons}>
            <Button style={styles.hdrIcon}>
              <Icon style={styles.profileIc} source="account" size={25} />
            </Button>
            <Button style={styles.hdrIcon} onPress={handleLogout}>
              <Icon style={styles.logoutIc} source="logout" size={25} />
            </Button>
          </View>
          <Divider />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigationBtns: {
    padding: 5,
    backgroundColor: 'blue',
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  nvgBtns: {
    fontSize: 20,
    color: 'black',
    border: 5,
    backgroundColor: 'lightblue',
  },
});

export default Header;
