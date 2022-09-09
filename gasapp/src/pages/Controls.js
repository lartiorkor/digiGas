import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import auth from '@react-native-firebase/auth';

import colors from '../theme/Colors';
import phone from '../assets/phone.png';
import valve from '../assets/valve.png';
import sprinkles from '../assets/sprinkles.png';
import reset from '../assets/reset.png';
import AppBar from '../components/AppBar';
import ControlModal from '../components/ControlModal';

const Controls = ({navigation}) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const hideModal = () => {
    setModalVisibility(false);
  };

  const openModal = () => {
    setModalVisibility(true);
  };

  const logout = async () => {
    auth().signOut();
    console.log('User signed out');
  };

  return (
    <View style={styles.container}>
      <AppBar title="Controls" openModal={openModal} />
      <ControlModal
        hideModal={hideModal}
        modalVisibility={modalVisibility}
        logout={logout}
        navigation={navigation}
      />
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          padding: 25,
        }}>
        <View style={styles.li}>
          <Pressable style={styles.button}>
            <Image source={phone} />
            <Text style={{color: 'black'}}>Phone</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Image source={reset} />
            <Text style={{color: 'black'}}>Reset</Text>
          </Pressable>
        </View>
        <View style={styles.li}>
          <Pressable style={styles.button}>
            <Image source={valve} />
            <Text style={{color: 'black'}}>Solenoid Valve</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Image source={sprinkles} />
            <Text style={{color: 'black'}}>Sprinkler</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    display: 'flex',
    flex: 1,
    paddingTop: 0,
  },

  li: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    marginVertical: 15,
    padding: 30,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 160,
  },
});

export default Controls;

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};
