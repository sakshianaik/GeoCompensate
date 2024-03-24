import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button, Text, HelperText} from 'react-native-paper';
import {Colors} from '../assets/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authneticateUser} from '../services/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(value => {
        if (value?.length > 0) {
          navigation.navigate('Home');
        }
      })
      .catch(error => console.error('AsyncStorage error: ', error));
  }, [navigation]);

  const saveUser = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };

  const handleLogin = async () => {
    const dataToSend = {
      empId: email,
      password: password,
    };

    const access_token = authneticateUser(dataToSend);
    if (access_token) {
      saveUser('user', access_token);
      setErrorMsg(null);
      navigation.navigate('Home');
    } else {
      setErrorMsg('Invalid credentials. Try again!');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={styles.heading}>
          GeoCompensate
        </Text>
        <TextInput
          label={'Employee ID'}
          style={styles.emailInput}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          label={'Password'}
          style={styles.emailInput}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button style={styles.button} mode="contained" onPress={handleLogin}>
          Login
        </Button>
        <HelperText
          type="error"
          visible={errorMsg != null && errorMsg.length > 0}>
          {errorMsg}
        </HelperText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.grayBlue,
  },
  heading: {
    color: Colors.darkGrayBlue,
    marginBottom: 20,
    fontWeight: '800',
  },
  emailInput: {
    marginBottom: 20,
    width: '100%',
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: Colors.darkGrayBlue,
  },
});

export default Login;
