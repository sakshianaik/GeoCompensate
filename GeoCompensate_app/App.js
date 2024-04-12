import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import SearchEmployee from './src/screens/SearchEmployee';
import HRDashboard from './src/screens/HRDashboard';
import EmployeeViewTimesheet from './src/screens/EmployeeViewTimesheet';2
import RegisterEmployee from './src/screens/RegisterEmployee';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name="HRHome"
        component={HRDashboard}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name="Search Employee"
        component={SearchEmployee}
        options={{headerBackTitle: false}}
      />
       <Stack.Screen
        name="View Timesheet"
        component={EmployeeViewTimesheet}
        />
      <Stack.Screen
        name="Register Employee"
        component={RegisterEmployee}
        options={{headerBackTitle: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
