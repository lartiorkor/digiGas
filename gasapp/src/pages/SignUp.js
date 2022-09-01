import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Pressable, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

import colors from '../theme/Colors';

function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = async () => {
    try {
      const userCredentials = await auth().createUserWithEmailAndPassword(
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
      <TextInput
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        placeholder="Confirm Password"
        style={styles.textInput}
        placeholderTextColor="#dad7c9"
      />
      <Pressable style={styles.button} onPress={register}>
        <Text
          style={{
            color: colors.background,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          SIGNUP
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('LogIn')}>
        <Text style={{color: '#dad7c9', textAlign: 'center'}}>
          Already have an account?{' '}
          <Text style={{textDecorationLine: 'underline'}}>Login</Text>
        </Text>
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

export default SignUp;
