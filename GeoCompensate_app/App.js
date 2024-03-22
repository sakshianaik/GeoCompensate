import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Button} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HeaderTop from './src/components/molecules/header';
import ShowTime from './src/components/atoms/clock';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    <SafeAreaView style={backgroundStyle}>
      {/* <Button
        icon="camera"
        mode="outlined"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button> */}
      <HeaderTop/>
      <ShowTime/>
    </SafeAreaView>
   
  );
}

export default App;
