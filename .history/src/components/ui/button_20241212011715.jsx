//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

// create a component
const Button = props => {
  const {title, status} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
    margin: 5,
  },

  success: {
    backgroundColor: 'aqua',
  },
  error: {
    backgroundColor: 'red',
  },

  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});

//make this component available to the app
export default Button;
