import React from 'react';
import {Pressable, Text, StyleSheet, Image} from 'react-native';

import colors from '../theme/Colors';

const ControlButton = ({title, icon}) => {
  return (
    <Pressable style={styles.button}>
      <Image source={icon} />
      <Text style={{color: 'black'}}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 15,
    padding: 30,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ControlButton;
