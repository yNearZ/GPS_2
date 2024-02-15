import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login'
import React, {Component} from 'react';
import GPS from './Screens/GPS'

export default function App() {
  return (
    
    <GPS/> 
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
