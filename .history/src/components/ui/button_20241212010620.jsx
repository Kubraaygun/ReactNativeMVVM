//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Button = () => {
  return (
    <View style={styles.container}>
      <Text>Button</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
    padding: 20,
    borderRadius: 10,
  },
});

//make this component available to the app
export default Button;
