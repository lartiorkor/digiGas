import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ControlButton from '../components/ControlButton'
import colors from '../theme/Colors'

const Controls = () => {
  return (
    <View style={styles.container}>
      <ControlButton title='Call Fire Fighters' />
      <ControlButton title='Solenoid Valve' />
      <ControlButton title='Sprinkler' />
      <ControlButton title='Reset' />
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    display: 'flex',
    flex: 1,
    padding: 35,
    justifyContent: 'center' 
  },

  button:{

  }
})

export default Controls;
