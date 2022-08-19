import React, {useCallback} from 'react';
import { View, Text, StyleSheet, Linking, Alert,Pressable } from 'react-native';


import ControlButton from '../components/ControlButton'
import colors from '../theme/Colors'

const OpenURLButton = ({ url, title }) => {
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
  return <Pressable onPress={handlePress} style={{marginVertical: 15,
    padding: 30,
    backgroundColor: colors.secondary,
    borderRadius: 10,}}><Text style={{color: 'black'}}>{title}</Text></Pressable>;
}

const Controls = ({navigation}) => {
  const telURL = 'tel://192';

  return (
    <View style={styles.container}>
      <View>
        <OpenURLButton url={telURL} title={"Call Fire Service"}/>
        <ControlButton title='Solenoid Valve' />
        <ControlButton title='Sprinkler' />
        <ControlButton title='Reset' />
      </View>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate('History')}>
      <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 16 }}>Go To History..</Text>
      </Pressable>
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

  pressable: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    position: 'absolute',
    bottom: 15,
    left: 35,
    borderRadius: 15,
    width: '100%'
  }
})

export default Controls;
