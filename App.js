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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Router from './AppRoute/Router'

// const HomeScreen = ({ navigation }) =>  {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen By Yukafi.Dev</Text>
//       <Button 
//         title="Ke Detail Kuy!"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <View style={{height: 10}} />
//       <Button 
//         color="red"
//         title="Ke Profile Kuy"
//         onPress={() => navigation.navigate('Profiles')}
//       />
//     </View>
//   )
// }

// const DetailScreen = ({route, navigation}) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen By Yukafi.Dev</Text>
//         <Button 
//           title="Go to Details... again"
//           onPress={() => navigation.push('Details')}
//         />
//         <View style={{height: 10}} />
//         <Button 
//           title="Go to Home..."
//           onPress={() => navigation.navigate('Home')}
//         />
//         <View style={{height: 10}} />
//         <Button 
//           title="Go Back..."
//           onPress={() => navigation.goBack()}
//         />
//         <View style={{height: 10}} />
//         <Button 
//           title="Go Back to First Screen in stack"
//           onPress={() => navigation.popToTop()}
//         />
//     </View>
//   )
// }

// const ProfileScreen = ({route, navigation}) => {
//   return(
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Profile Screen Bung</Text>
//       <Button
//         color="black"
//         title="Go to Home"
//         onPress={() => navigation.navigate('Home')}
//       />
//       <View style={{height: 10}} />
//       <Button 
//         color="green"
//         title="Go back to first screen is stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   )
// }

// Stack berguna untuk routing aplikasi
const Stack = createStackNavigator();

const App = () => {
  return (
    <Router />
    // <Login />
    // <Reducers />
    // <Login />
  //  <NavigationContainer>
  //    <Stack.Navigator initialRouteName="Home">
  //      <Stack.Screen name="Home" component={HomeScreen} />
  //      <Stack.Screen name="Details" component={DetailScreen} />
  //      <Stack.Screen name="Profiles" component={ProfileScreen} />
  //    </Stack.Navigator>
  //  </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
