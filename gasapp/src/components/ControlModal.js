import React from 'react';
import {Modal, View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ControlModal({
  modalVisibility,
  hideModal,
  logout,
  navigation,
}) {
  const toHome = () => {
    hideModal();
    navigation.navigate('Home');
  };

  const toHistory = () => {
    hideModal();
    navigation.navigate('History');
  };

  return (
    <Modal
      transparent={true}
      visible={modalVisibility}
      onRequestClose={hideModal}>
      <View>
        <View style={styles.modalView}>
          <Pressable style={styles.modalButton} onPress={toHome}>
            <Ionicons
              name="home"
              size={25}
              color="black"
              style={{marginRight: 15}}
            />
            <Text style={{color: 'black', fontSize: 18}}>Home</Text>
          </Pressable>
          <Pressable style={styles.modalButton} onPress={toHistory}>
            <Ionicons
              name="timer"
              size={27}
              color="black"
              style={{marginRight: 15}}
            />
            <Text style={{color: 'black', fontSize: 18}}>History</Text>
          </Pressable>
          <Pressable style={styles.modalButton} onPress={logout}>
            <Ionicons
              name="log-out"
              size={29}
              color="black"
              style={{marginRight: 15}}
            />
            <Text style={{color: 'black', fontSize: 18}}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    marginTop: 64,
    marginLeft: 130,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'whitesmoke',
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
});
