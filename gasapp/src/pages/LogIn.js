import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import { firebase } from '../../firebase/config'

import colors from '../theme/Colors'

function LogIn({ navigation }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const login = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Home', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }
    return(
        <View style={styles.container}>
            <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder='Email' style={styles.textInput} placeholderTextColor='#dad7c9' />
            <TextInput value={password} onChangeText={(text) => setPassword(text)} placeholder='Password' style={styles.textInput} placeholderTextColor='#dad7c9' />
            <Pressable style={styles.button} onPress={() => login()}>
                <Text style={{ color:colors.accent, textAlign: 'center', fontWeight:'bold' }}> LOGIN </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ color:'#dad7c9', textAlign: 'center'}}> Signup </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: colors.accent,
        display: 'flex',
        flex: 1,
        padding: 35,
        justifyContent: 'center' 
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
    }
 })

export default LogIn;