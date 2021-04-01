/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import firebase from '@react-native-firebase/app'
import Router from './AppRoute/Router'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

// Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyC5Q0pr5Kc-j8hzN8KrOm0yWLEBZc2jD9Y",
  authDomain: "molidu-60dbb.firebaseapp.com",
  projectId: "molidu-60dbb",
  storageBucket: "molidu-60dbb.appspot.com",
  messagingSenderId: "619665502754",
  appId: "1:619665502754:web:7d2a0602540aadee7fd07b",
  measurementId: "G-0XDLHN93RR"
};
//dikasih kondisi biar tidak terjadi error firebase default

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Router />
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
