import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import * as Progress from 'react-native-progress';
import auth from '@react-native-firebase/auth';

import colors from '../theme/Colors';

const Home = ({navigation}) => {
  const logout = async () => {
    auth().signOut();
    console.log('User signed out');
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.childContainer}> */}
      <View style={styles.progressCircle}>
        <Progress.Circle
          size={250}
          progress={0.12}
          thickness={32}
          color={'#004e98'}></Progress.Circle>
        <Text
          style={{
            color: 'black',
            position: 'relative',
            bottom: 140,
            fontSize: 25,
          }}>
          12%
        </Text>
      </View>
      <View style={styles.innerView}>
        <View
          style={{
            backgroundColor: colors.secondary,
            paddingHorizontal: 30,
            paddingVertical: 60,
            borderRadius: 15,
          }}>
          <Text style={styles.text}>Date: 28th July, 2022</Text>
          <Text style={styles.text}>Gas Concentration: 50</Text>
          <Text style={styles.text}>Status: Safe</Text>
        </View>
      </View>
      {/* <Pressable style={styles.pressable} onPress={logout}>
          <Text style={{}}>Logout</Text>
        </Pressable> */}
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  childContainer: {
    backgroundColor: colors.background,
    display: 'flex',
    flex: 1,
    padding: 35,
    paddingTop: 40,
    justifyContent: 'center',
  },

  innerView: {
    paddingHorizontal: 20,
    display: 'flex',
    flex: 1,
  },

  text: {
    color: '#000',
    fontSize: 23,
    marginVertical: 4.5,
  },

  container: {
    display: 'flex',
    flex: 1,
    marginTop: 15,
  },

  pressable: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    position: 'absolute',
    bottom: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    width: '90%',
  },

  progressCircle: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
