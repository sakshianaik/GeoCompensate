import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Colors } from '../assets/themes';
import Header from '../components/molecules/header';

const Profile = ({ navigation, employeeId }) => {

  const handleEditProfile = () => {
    console.warn(employeeId)
    navigation.navigate('Edit Profile', { employeeId: employeeId , isHR:false});
  }

  const handleChangePassword = () => {
    console.warn("change password button prressed")
  }


  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.editProfileButton}
          mode="contained"
          onPress={handleEditProfile}>
          <Text style={styles.editProfileButton.searchText}>Edit Profile</Text>
        </Button>
        <Button
          style={styles.changePasswordButton}
          mode="contained"
          onPress={handleChangePassword}>
          <Text style={styles.editProfileButton.searchText}>
            Change Password
          </Text>
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
  editProfileButton: {
    backgroundColor: Colors.grayBlue,
    marginVertical: 20,
    padding: 10,
    searchText: {
      color: Colors.black,
      fontWeight: 900,
    },
  },
  changePasswordButton: {
    backgroundColor: Colors.lavender,
    marginVertical: 20,
    padding: 10,
    searchText: {
      color: Colors.black,
      fontWeight: 900,
    },
  },
  editButton: {
    backgroundColor: Colors.grayBlue,
    marginVertical: 20,
    padding: 10,
    searchText: {
      color: Colors.black,
      fontWeight: 900,
    },
  },
});

export default Profile;
