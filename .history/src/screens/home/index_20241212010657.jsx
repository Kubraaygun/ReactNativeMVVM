//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/ui/button';

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Home</Text>
      <Button />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Home;
