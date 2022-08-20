import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCL3yfeov4N-EVIuG_4kY4pYkEnGHvcyxI',
  authDomain: 'digi-gas.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'digi-gas',
  storageBucket: 'digi-gas.appspot.com.appspot.com',
  messagingSenderId: '855761797400',
  appId: '1:855761797400:android:9718d0f023d6ddd06e5e6d',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };