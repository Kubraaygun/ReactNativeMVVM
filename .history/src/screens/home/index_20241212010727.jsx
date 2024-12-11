//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Button from '../../components/ui/button';

// create a component
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30}}>Home</Text>
      <Button />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

//make this component available to the app
export default Home;
