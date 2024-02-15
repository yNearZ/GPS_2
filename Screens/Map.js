import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.Textinho}>Localizar</TextInput>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <TextInput style={styles.Textinho}
        placeholder = "Localizar:)"
      />

        <TouchableOpacity style = {styles.Istilo}>
         <Text style = {styles.Kvalinho}>Botão</Text>
       </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  Textinho:{
    position: "absolute",
    top:3,
    height:40,
    width: '50%',
    borderColor:'gray',
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  Istilo:{
    backgroundColor:"red",
    position: "absolute",
    top: 8,
    right:5,
    height:20,
    width: 100,
    borderColor:'gray',
    borderWidth: 1,
    paddingLeft: 10,
    
  },
  Kvalinho:{

  }
});

export default MapScreen;
