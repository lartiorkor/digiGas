import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import colors from '../theme/Colors';

function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const validateInput = () => {
    if (email === '') {
      setEmailError('**Email is required**');
      return false;
    }
    if (password === '') {
      setPasswordError('**Password is required**');
      return false;
    }
    return true;
  };

  const login = async () => {
    setLoading(true);
    try {
      const userCredentials = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log(userCredentials.user.email);
      setLoading(false);
      setEmail('');
      setPassword('');
      setPassword('');
      setEmailError('');
    } catch (err) {
      console.log(err.code);
      if (err.code === 'auth/wrong-password') {
        setPasswordError('**Password is invalid**');
      }
      if (err.code === 'auth/user-not-found') {
        setEmailError('**Incorrect email**');
      }
      setLoading(false);
    }
  };

  const handleLogin = () => {
    const shouldLogin = validateInput();
    console.log(shouldLogin);

    if (shouldLogin) {
      login();
    }

    return;
  };

  return (
    <View style={styles.container}>
      {emailError && <Text style={styles.inputErrorTxt}>{emailError}</Text>}
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        style={styles.textInput}
        placeholderTextColor="#dad7c9"
      />
      {passwordError && (
        <Text style={styles.inputErrorTxt}>{passwordError}</Text>
      )}
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        style={styles.textInput}
        placeholderTextColor="#dad7c9"
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        {isLoading && (
          <ActivityIndicator
            color={colors.background}
            style={{marginRight: 10}}
            size={22}
          />
        )}
        <Text
          style={{
            color: colors.background,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          LOGIN
        </Text>
      </Pressable>
      <View>
        <Text style={{color: '#dad7c9', textAlign: 'center', fontSize: 16}}>
          Don't have an account?{' '}
          <Text
            style={{textDecorationLine: 'underline', color: colors.primary}}
            onPress={() => navigation.navigate('SignUp')}>
            Signup
          </Text>
        </Text>
      </View>
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
    marginTop: 7,
    marginBottom: 15,
    borderRadius: 10,
    color: '#000',
    paddingLeft: 10,
  },

  button: {
    marginVertical: 15,
    marginTop: 20,
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputErrorTxt: {
    color: 'red',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default LogIn;
