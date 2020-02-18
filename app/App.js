import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box1}>
        <Text style={styles.textTitle}>Hola cesde!</Text>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.textTitle}>Hola cesde!</Text>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.textTitle}>Hola cesde!</Text>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce775',
    flexDirection: 'column'
  },
  text: {
    color: '#00bcd4'
  },
  textTitle: {
    color: '#f50057'
  },
  box1:{
    flex:1,
    backgroundColor: '#f50057'
  },
  box2:{
    flex:1,
    backgroundColor: '#64dd17'
  },
  box3:{
    flex:1,
    backgroundColor: '#00b0ff'
  }
});
