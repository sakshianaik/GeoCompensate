import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Colors } from '../assets/themes';
import {registerEmployee} from '../services/auth';
// import HRDashboard from './HRDashboard';

export default EmployeeRegister = ({navigation}) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [ssn, setSsn] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [departmentId, setdepartmentId] = useState('');
    const [hourlyPay, setHourlyPay] = useState('');

    const [errorMsg, setErrorMsg] = React.useState(null);

    const companyDetails = {
        companyId: 1,
        companyName: 'Chartwells'
    }
    const departmentDetails = [
        {
            departmentId: 1,
            departmentName: 'Connection Cafe',
        },
        {
            departmentId: 2,
            departmentName: 'Maverick Cafe',
        },
        {
            departmentId: 3,
            departmentName: 'Starbuck UC',
        },
        {
            departmentId: 4,
            departmentName: 'Starbuck Commons',
        },
        {
            departmentId: 5,
            departmentName: 'Chick-Fil-A',
        },
        {
            departmentId: 6,
            departmentName: 'Panera Bread',
        },
        {
            departmentId: 7,
            departmentName: 'Pandas',
        },
        {
            departmentId: 8,
            departmentName: 'Subway',
        },
    ]

    const validateRegisterEmployeeDetails = async () => {
        if(!firstName && !lastName && !email && !phone && !ssn && !companyId && !departmentId && !hourlyPay){
            setErrorMsg("All fields are mandatory");
        }
        // if(access_token){
        //     saveUser('user', access_token);
        //     setErrorMsg(null);
        //     navigation.navigate('HRDashboard');
        // }
        const type= 'WORKER'
        const dataToSend = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            ssn: ssn,
            companyId: '5f4e79268b5b6f0034c22e5a',
            departmentId: '5f4e79268b5b6f0034c22e5b',
            hourlyPay: hourlyPay,
            type: type,
        };
        const data = await registerEmployee(dataToSend); 
        console.warn(data);
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={'First Name'}
                style={styles.input}
                value={firstName}
                onChangeText={text => setfirstName(text)}
            />
            <TextInput
                placeholder={'Last Name'}
                style={styles.input}
                value={lastName}
                onChangeText={text => setlastName(text)}
            />
            <TextInput
                placeholder={'Email'}
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                placeholder={'Phone'}
                style={styles.input}
                value={phone}
                onChangeText={text => setPhone(text)}
                keyboardType="numeric"
            />
            <TextInput
                placeholder={'SSN'}
                style={styles.input}
                value={ssn}
                onChangeText={text => setSsn(text)}
                keyboardType="numeric"
            />
            <TextInput
                placeholder={'Company'}
                style={styles.input}
                value={companyId}
                onChangeText={number => setCompanyId(number)}
            />
            <TextInput
                placeholder={'Department Name'}
                style={styles.input}
                value={departmentId}
                onChangeText={number => setdepartmentId(number)}
            />
            <TextInput
                placeholder={'Hourly Pay'}
                style={styles.input}
                value={hourlyPay}
                onChangeText={text => setHourlyPay(text)}
                keyboardType="numeric"
            />
            <Button style={styles.button} mode="contained" onPress={() => validateRegisterEmployeeDetails()}>
                Register
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
        flexDirection: 'row',
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
    }
});