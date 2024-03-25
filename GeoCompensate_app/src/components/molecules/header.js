import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Button, Text, Icon} from 'react-native-paper';
import { Colors } from '../../assets/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = ({navigation}) => {
  const handleLogout = () => {
    AsyncStorage.removeItem('user').then(() => {
      navigation.navigate('Login');
    });
  }
  return (
    <View styles={styles.hdr}>
      <View>
        <View style={styles.icons}>
          <Button style={styles.hdrIcon}>
            <Icon
              style={styles.profileIc}
              source="account"
              size={30}
            />
          </Button>
          <Button style={styles.hdrIcon} onPress={handleLogout}>
            <Icon
              style={styles.logoutIc}
              source="logout"
              size={30}
            />
          </Button>
        </View>
        <Text style={styles.hdrTitle}>Home</Text>
      </View>
      <View>
        <Text style={styles.welcome}>Welcome, Nandish!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hdr: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor : Colors.aquaBlue,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hdrIcon: {
    backgroundColor : Colors.aquaBlue,
  },
  profileIcon: {
    backgroundColor : 'blue',
  },
  logoutIc: {
    backgroundColor: 'blue',
  },
  hdrTitle: {
    padding: 10,
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
  },
  welcome: {
    textAlign: 'center',
    fontSize: 30,
    paddingBottom: 20,
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