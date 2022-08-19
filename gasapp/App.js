import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from './src/pages/LogIn';
import SignUp from './src/pages/SignUp';
import Controls from './src/pages/Controls';
import Home from './src/pages/Home';
import History from './src/pages/History';
import colors from './src/theme/Colors';


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} options={{
        headerShown: false, 
      }}/>
      <Stack.Screen name="LogIn" component={LogIn} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="Home" component={Home} options={{
        headerStyle: {backgroundColor: colors.primary}, headerTintColor: 'white'
      }}/>
      <Stack.Screen name="Controls" component={Controls} options={{
        headerStyle: {backgroundColor: colors.primary}, headerTintColor: 'white'
      }}/>
      <Stack.Screen name="History" component={History} options={{
        headerStyle: {backgroundColor: colors.primary}, headerTintColor: 'white'
      }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles= StyleSheet.create(
  {
    container:{
      display: 'flex',
      flex: 1
    }
  }
)