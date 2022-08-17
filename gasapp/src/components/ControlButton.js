import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

import colors from '../theme/Colors';

const ControlButton = ({ title }) => {
  return (

    <Pressable style={styles.button}>
        <Text style={{color: 'black' }}>{title}</Text>
    </Pressable>
  );
}

const styles=StyleSheet.create({
  button:{
    marginVertical: 15,
    padding: 30,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  }
})

export default ControlButton;
