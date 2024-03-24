import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Clock from 'react-live-clock';
import {Colors} from '../assets/themes';

const Profile = () => {
  return (
    <View>
      <Clock
        style={styles.clock}
        element={Text}
        format={'HH:mm:ss'}
        ticking={true}
        timezone={'US/Central'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  clock: {
    fontSize: 60,
    fontWeight: '800',
    color: Colors.black,
  },
});

export default Profile;
