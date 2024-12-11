//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Button</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});

//make this component available to the app
export default Button;
