import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import colors from '../theme/Colors';

function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
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

    if (confirmPassword === '') {
      setConfirmPasswordError('**Field cannot be empty**');
      return false;
    }

    if (password !== confirmPassword) {
      setPasswordError('**Passwords do not match**');
      setPassword('');
      setConfirmPassword('');
      return false;
    }
    return true;
  };

  const register = async () => {
    setLoading(true);
    try {
      const userCredentials = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(userCredentials.user.email);
      setLoading(false);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setEmailError('');
      setPasswordError('');
      setConfirmPasswordError('');
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.code === 'auth/email-already-in-use') {
        setEmailError('**Email has been taken**');
      }
    }
  };

  const handleRegister = () => {
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    const shouldRegister = validateInput();

    if (shouldRegister) {
      register();
    }
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
      {confirmPasswordError && (
        <Text style={styles.inputErrorTxt}>{confirmPasswordError}</Text>
      )}
      <TextInput
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        placeholder="Confirm Password"
        style={styles.textInput}
        placeholderTextColor="#dad7c9"
      />
      <Pressable style={styles.button} onPress={handleRegister}>
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
          SIGNUP
        </Text>
      </Pressable>
      <View>
        <Text style={{color: '#dad7c9', textAlign: 'center', fontSize: 16}}>
          Already have an account?{' '}
          <Text
            style={{textDecorationLine: 'underline', color: colors.primary}}
            onPress={() => navigation.navigate('LogIn')}>
            Login
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

export default SignUp;
