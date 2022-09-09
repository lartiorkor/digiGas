import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Modal} from 'react-native';
import * as Progress from 'react-native-progress';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../theme/Colors';
import ModalContext from '../context/ModalContext';
import AppBar from '../components/AppBar';
import HomeModal from '../components/HomeModal';

const Home = ({navigation}) => {
  const logout = async () => {
    auth().signOut();
    console.log('User signed out');
  };

  const today = new Date().toDateString();

  const [modalVisibility, setModalVisibility] = useState(false);
  const [progressValue, setProgressValue] = useState(25);

  const hideModal = () => {
    setModalVisibility(false);
  };

  const openModal = () => {
    setModalVisibility(true);
  };

  return (
    <View style={styles.container}>
      <AppBar title="Home" openModal={openModal} />
      <HomeModal
        hideModal={hideModal}
        modalVisibility={modalVisibility}
        logout={logout}
        navigation={navigation}
      />

      {/* <View style={styles.childContainer}> */}
      <View style={styles.progressCircle}>
        <Progress.Circle
          size={250}
          progress={progressValue / 100}
          thickness={32}
          color={'#004e98'}></Progress.Circle>
        <Text
          style={{
            color: 'black',
            position: 'relative',
            bottom: 140,
            fontSize: 25,
          }}>
          {progressValue}%
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
          <Text style={styles.text}>Date: {today}</Text>
          <Text style={styles.text}>Gas Concentration: 50</Text>
          <Text style={styles.text}>Status: Safe</Text>
        </View>
      </View>
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
