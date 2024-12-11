//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './src/screens/home';

// create a component
const App = () => {
  return <Home />;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
