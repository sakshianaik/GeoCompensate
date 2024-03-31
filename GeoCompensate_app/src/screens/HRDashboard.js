import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {Colors} from '../assets/themes';
import Header from '../components/molecules/header';

const HRDashboard = ({navigation}) => {
  const handleSearchEmployee = () => {
    navigation.navigate('Search Employee');
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.hdrTitle}>Home</Text>
      <Text style={styles.welcome}>Welcome, John!</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.searchButton}
          mode="contained"
          onPress={handleSearchEmployee}>
          <Text style={styles.searchButton.searchText}>Search Employee</Text>
        </Button>
        <Button
          style={styles.editButton}
          mode="contained"
          onPress={handleSearchEmployee}>
          <Text style={styles.searchButton.searchText}>Edit Employee</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  hdrTitle: {
    paddingVertical: 12,
    marginTop: 20,
    paddingHorizontal: 10,
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
  },
  welcome: {
    textAlign: 'center',
    fontSize: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  searchButton: {
    backgroundColor: Colors.grayBlue,
    marginVertical: 20,
    padding: 10,
    searchText: {
      color: Colors.black,
      fontWeight: 900,
    },
  },
  editButton: {
    backgroundColor: Colors.lavender,
    marginVertical: 20,
    padding: 10,
    searchText: {
      color: Colors.black,
      fontWeight: 900,
    },
  },
});

export default HRDashboard;
