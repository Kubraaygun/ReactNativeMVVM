//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Button = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: 'white',
  },
});

//make this component available to the app
export default Button;
