import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import {Colors} from '../assets/themes';
import {Dropdown} from 'react-native-element-dropdown';
import {updateEmpProfile} from '../services/employee';
import {fetchEmployeeWithID} from '../services/employee';

const EditProfile = ({navigation, employeeId}) => {
  const [empID, setEmpID] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ssn, setSsn] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [hourlyPay, setHourlyPay] = useState('');
  const [errorMsg, setErrorMsg] = React.useState(null);

  const [disabled, setDisabled] = useState(true);
  const [editBtn, setEditBtn] = useState(true);
  const [saveChangesBtn, setSaveChnagesBtn] = useState(false);

  useEffect(() => {
    console.log(employeeId);
    setEmpID(employeeId);
    fetchEmployeeWithID(employeeId).then(empData => {
      setfirstName(empData?.firstName);
      setlastName(empData?.lastName);
      setEmail(empData?.email);
      setPhone(empData?.phone.toString());
      setSsn(empData?.ssn.toString());
    });
  }, [navigation]);

  const companyDetails = {
    companyId: 1,
    companyName: 'Chartwells',
  };
  const departmentDetails = [
    {
      departmentId: 1,
      departmentName: 'Utility Server',
    },
    {
      departmentId: 2,
      departmentName: 'Dishwasher',
    },
    {
      departmentId: 3,
      departmentName: 'Cashier',
    },
    {
      departmentId: 4,
      departmentName: 'Baker',
    },
  ];

  const edituser = () => {
    setDisabled(false);
    setSaveChnagesBtn(true);
    setEditBtn(false);
  };

  const saveChanges = async () => {
    setSaveChnagesBtn(false);
    setEditBtn(true);
    setDisabled(true);
    const dataToSend = {
      employeeId: empID,
      firstName: firstName,
      lastName: lastName,
      name: firstName + ' ' + lastName,
      email: email,
      phone: phone,
      isHR: false,
    };
    const data = await updateEmpProfile(dataToSend);
    console.log(data);

    //if (!firstName && !lastName && !email && !phone && !ssn) {
    //setErrorMsg('All fields are mandatory');
    //} else {

    //}
  };

  const [value, setValue] = useState(departmentDetails[0].departmentName);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        label={'First Name'}
        style={styles.input}
        value={firstName}
        disabled={disabled}
        onChangeText={text => setfirstName(text)}
      />
      <TextInput
        label={'Last Name'}
        style={styles.input}
        value={lastName}
        disabled={disabled}
        onChangeText={text => setlastName(text)}
      />
      <TextInput
        label={'Email'}
        style={styles.input}
        value={email}
        disabled={disabled}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label={'Phone'}
        style={styles.input}
        value={phone}
        disabled={disabled}
        onChangeText={text => setPhone(text)}
        keyboardType="numeric"
      />
      <TextInput
        label={'SSN'}
        style={styles.input}
        value={ssn}
        disabled={disabled}
        onChangeText={text => setSsn(text)}
        keyboardType="numeric"
      />
      <TextInput
        label={'Company'}
        style={styles.input}
        value={companyDetails.companyName}
        disabled={true}
        onChangeText={number => setCompanyId(number)}
      />
      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          labelStyle={styles.labelStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={departmentDetails}
          maxHeight={300}
          labelField="departmentName"
          valueField="departmentName"
          label={!isFocus ? 'Department Name' : ''}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            console.log(item);
            setValue(item.departmentName);
            setIsFocus(false);
          }}
        />
      </View>
      {editBtn && (
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => edituser()}>
          Edit
        </Button>
      )}
      {saveChangesBtn && (
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => saveChanges()}>
          Save Changes
        </Button>
      )}
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
  dropdownContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    marginTop: 20,
    borderRadius: 4,
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.8,
  },
  dropdownIcon: {
    marginRight: 5,
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

export default EditProfile;
