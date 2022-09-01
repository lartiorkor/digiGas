import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';

import colors from '../theme/Colors';

function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const userCredentials = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log(userCredentials.user.email);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        style={styles.textInput}
        placeholderTextColor="#dad7c9"
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        style={styles.textInput}
        placeholderTextColor="#dad7c9"
      />
      <Pressable style={styles.button} onPress={login}>
        <Text
          style={{
            color: colors.background,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {' '}
          LOGIN{' '}
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text style={{color: '#dad7c9', textAlign: 'center'}}> Signup </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    display: 'flex',
    flex: 1,
    padding: 35,
    justifyContent: 'center',
  },

  textInput: {
    borderWidth: 2,
    borderColor: colors.primary,
    marginVertical: 15,
    borderRadius: 10,
    color: '#000',
    paddingLeft: 10,
  },

  button: {
    marginVertical: 15,
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
});

export default LogIn;
