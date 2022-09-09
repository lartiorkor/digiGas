import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {Provider as PaperProvider} from 'react-native-paper';

import LogIn from './src/pages/LogIn';
import SignUp from './src/pages/SignUp';
import Controls from './src/pages/Controls';
import Home from './src/pages/Home';
import History from './src/pages/History';
import colors from './src/theme/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!user ? (
            <>
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{
                  headerShown: false,
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={({navigation}) => ({
                  headerStyle: {backgroundColor: colors.primary},
                  headerTintColor: 'white',
                  headerRight: () => <View style={styles.iconContainer}></View>,
                  headerBackVisible: false,
                  headerShown: false,
                })}
              />
              <Stack.Screen
                name="Controls"
                component={Controls}
                options={({navigation}) => ({
                  headerStyle: {backgroundColor: colors.primary},
                  headerTintColor: 'white',
                  headerBackVisible: false,
                  headerShown: false,
                  headerRight: () => (
                    <View style={styles.iconContainer}>
                      <Ionicons
                        name="home"
                        size={23}
                        color={colors.background}
                        style={{marginRight: 10}}
                        onPress={() => navigation.navigate('Home')}
                      />
                      <Ionicons
                        name="timer"
                        size={25}
                        color={colors.background}
                        onPress={() => navigation.navigate('History')}
                      />
                    </View>
                  ),
                })}
              />
              <Stack.Screen
                name="History"
                component={History}
                options={({navigation}) => ({
                  headerStyle: {backgroundColor: colors.primary},
                  headerTintColor: 'white',
                  headerBackVisible: false,
                  headerShown: false,
                  headerRight: () => (
                    <View style={styles.iconContainer}>
                      <Ionicons
                        name="home"
                        size={25}
                        color={colors.background}
                        style={{marginRight: 10}}
                        onPress={() => navigation.navigate('Home')}
                      />
                      <Ionicons
                        name="construct"
                        size={25}
                        color={colors.background}
                        onPress={() => navigation.navigate('Controls')}
                      />
                    </View>
                  ),
                })}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
