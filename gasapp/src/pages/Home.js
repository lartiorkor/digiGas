import React, {useState} from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Progress from 'react-native-progress';

import colors from '../theme/Colors'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.progressCircle}>
          <Progress.Circle size={225} progress={0.55} thickness={28} color={'#004e98'}/>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.text}>Date: 28th July, 2022</Text>
          <Text style={styles.text}>Gas Concentration: 50</Text>
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
    backgroundColor: colors.background,
    display: 'flex',
    flex: 1,
    padding: 35,
    paddingTop: 40,
    justifyContent: 'center'
  },

  innerView: {
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginTop: 30
  },

  text: {
    color: '#000',
    fontSize: 18,
    marginVertical: 3.5,
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
  },
  
  progressCircle: {
    marginTop: -60,
    marginBottom: 25,
    display: 'flex',
    alignItems: 'center'
  }
})

export default Home;
