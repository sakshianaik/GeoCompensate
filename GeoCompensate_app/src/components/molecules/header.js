import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button, Text,Avatar } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const HeaderTop = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <View styles={styles.hdr}>
        <View>
        <Avatar.Icon size={24} icon="folder"/>
        <Text style={styles.hdrTitle}>Home</Text>
        </View>
        <View>
        <Text style={styles.welcome}>
            Welcome, Nandish!
        </Text>
        </View>
        <View style={styles.navigationBtns}>
            <Button style={styles.nvgBtns}>Community</Button>
            <Button style={styles.nvgBtns}>View Timesheet</Button>
            <Button style={styles.nvgBtns}>View Report</Button>
            <Button style={styles.nvgBtns}>Payroll</Button>
        </View>
    </View>
  );
};

const styles = StyleSheet.create(({
    hdr:{
        flex : 1,
        flexDirection : 'row',
    },
    hdrTitle : {
        padding : 5,
        fontWeight : 700,
        fontSize : 15,
        textAlign : 'center',
    },
    welcome : {
        textAlign : 'center',
        fontSize : 25,
        paddingBottom : 5,
    },
    navigationBtns :{
        padding : 5,
        // flex : 1,
        backgroundColor : 'blue',
        color : 'black',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignContent : 'center', 
    },
    nvgBtns: {
        fontSize : 20,
        color : 'black',
        border : 5,
        backgroundColor : 'lightblue'
    }
}))

export default HeaderTop;