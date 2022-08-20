import React, {useState} from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Progress from 'react-native-progress';

import colors from '../theme/Colors'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View>
          <Progress.Circle size={100} progress={0.5} thickness={20} />
        </View>
        <View style={styles.innerView}>
          <Text style={styles.text}>Date: 28th July, 2022</Text>
          <Text style={styles.text}>Gas Concentration: 50ppm</Text>
          <Text style={styles.text}>Status: Safe</Text>
        </View>
      </View>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate('Controls')}>
        <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 16 }}>Go To Controls..</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  childContainer: {
    backgroundColor: colors.accent,
    display: 'flex',
    flex: 1,
    padding: 35,
    justifyContent: 'center'
  },

  innerView: {
    borderColor: colors.primary,
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 20
  },

  text: {
    color: '#000',
    fontSize: 18,
  },

  container: {
    display: 'flex',
    flex: 1
  },

  pressable: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    position: 'absolute',
    bottom: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    width: '90%'
  }

})

export default Home;
