import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import MapView, {Marker} from 'react-native-maps';
import CustomMapView from './components/CustomMapView'
//import { TextInput } from 'react-native-web';
import React, { useState } from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <CustomMapView style={styles.flex}></CustomMapView>

      <View style={styles.form}>
        <Text> Nazwa</Text>
        <TextInput style={ styles.textinput } editable />
      </View>
      
      

    </SafeAreaView>
  );
}

function onPress(){
  alert("xDD");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
  },
  textinput: {
    //flex: 1,
    borderWidth: 1,
    width: '95%'
  },
  mapContainer: {
    flex: 1,
  },
  form: {
    flex: 1,
    width: '100%'
  }
});
