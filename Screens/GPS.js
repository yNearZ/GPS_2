
import React, { Component, useEffect } from "react";
import MapView from 'react-native-maps';
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from "react-native";
import Map from './Map';


export default class GPSscreen extends Component {




  render() {
    return (
      <View style={styles.container}>
        <View style ={styles.mapStyles}>
         <Map/>
         </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mapStyles:{
    height: 700,
    width:  500,
  },
 
  
});
