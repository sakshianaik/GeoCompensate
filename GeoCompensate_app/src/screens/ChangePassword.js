import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import {Colors} from '../assets/themes';
import {changePassword} from '../services/employee';

const ChangePassword = ({navigation, route,}) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confrimNewPassword, setConfirmNewPassword] = useState('');
  const [errorMsg, setErrorMsg] = React.useState(null);
  const changePasword = async () => {
    setErrorMsg('');
    if (newPassword === confrimNewPassword) {
      let data = {
        employeeId: route.params.employeeId,
        currentPassword: password,
        newPassword: newPassword,
      };
      changePassword(data).then(res => {
        if (res) {
          Alert.alert('Success', 'User password changed successfully.', [
            {
              text: 'Ok',
              onPress: () => {
                if (route.params.isHR) {
                  navigation.navigate('HRHome');
                } else {
                  navigation.navigate('Home');
                }
              },
            },
          ]);
        } else {
          Alert.alert('Failure', 'User current password does not match.');
        }
      });
    } else {
      setErrorMsg('New password does not match with Confirm New password');
    }
  };

  useState(() => {}, [errorMsg]);

  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={true}
        label={'Current Password'}
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        secureTextEntry={true}
        label={'New password'}
        style={styles.input}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <TextInput
        secureTextEntry={true}
        label={'Confirm New password'}
        style={styles.input}
        value={confrimNewPassword}
        onChangeText={text => setConfirmNewPassword(text)}
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => changePasword()}>
        Update Password
      </Button>
      <HelperText
        type="error"
        visible={errorMsg != null && errorMsg.length > 0}>
        {errorMsg}
      </HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.grayBlue,
  },
  input: {
    marginTop: 20,
    width: '100%',
    backgroundColor: Colors.white,
    marginBottom: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  button: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: Colors.darkGrayBlue,
  },
  errortext: {
    color: 'red',
    marginLeft: 13,
    marginTop: 1,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: Colors.black,
  },
  labelStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default ChangePassword;
