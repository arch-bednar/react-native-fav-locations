import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
//import MapView, {Marker} from 'react-native-maps';
import CustomMapView from './components/CustomMapView'
//import { TextInput } from 'react-native-web';
import React, { useState } from 'react';
import CustomFlatList from './components/CustomFlatList';
import LocationForm from './components/LocationForm';
import Home from './screens/Home';
import Edit from './screens/Edit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App(){
  //return (<Home></Home>);

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Edit' component={Edit}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );

}

// export default function App() {

//   const [currentCoords, setCurrentCoords] = useState(null);

//   // return (
//   //   <SafeAreaProvider style={[styles.main_container, styles.background]}>
//   //     <StatusBar style="auto" />
//   //     <View style={[styles.container, styles.background]}>
//   //       <Text style={styles.textIntroduction}>Moje ulubione miejsca</Text>
//   //       <CustomMapView style={styles.mapContainer} onPinChange={setCurrentCoords} ></CustomMapView>

//   //       {/* <View style={styles.form}> */}
//   //         {/* <Text> Nazwa</Text>
//   //         <TextInput style={ styles.textinput } editable />
//   //         <Text>{currentCoords ? `${currentCoords.longitude} ${currentCoords.latitude}`: ``}
//   //         </Text> */}
//   //       {/* </View> */}
//   //     </View>
//   //     <View style={[styles.listPanel,  ]}>
//   //       <CustomFlatList style={styles.list}/>
//   //     </View>
      
//   //     {/* <Button title="siema"/> */}

//   //   </SafeAreaProvider>
//   // );

//   return(
//     <LocationForm style={styles.background}/>
//   );
// }

// function onPress(){
//   alert("xDD");
// }

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: '#FFF6F1',
//   },
//   main_container:{
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     // backgroundColor: '#FFF6F1',
//     textAlign:'center',
//     alignItems: 'center',
//     //alignContent: 'center',
//     paddingTop: '5%'
//   },
//   container: {
//     flex: 4,
//     width: '100%',
//     backgroundColor: '#fff',
//     // alignSelf: 1,
//     alignItems: 'center',
//     // justifyContent: 'center',
//     justifyContent: 'center',
//     // alignContent: 'center'
//     marginBottom: '5%',
//     // borderWidth: 1,
//     // borderRadius: 3
//   },
//   map: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   textinput: {
//     //flex: 1,
//     borderWidth: 1,
//     width: '95%'
//   },
//   mapContainer: {
//     flex: 1,
//     borderRadius: 22,
//     evaluate: 3,
//     overflow: 'hidden'
//   },
//   form: {
//     // flex: 1,
//     width: '100%',
//     marginBottom: '1px',
//   },
//   listPanel: {
//     flex: 2,
//     // borderWidth: 1,
//     // borderRadius: 22,
//     // evaluate: 3,
//     width: '100%',
//     alignContent: "center",
//     alignItems: 'center',
//     marginLeft: '1px',
//     marginRight: '1px',
//   },
//   list: {
//     flex: 2,
//     // borderWidth: 1,
//     borderRadius: 22,
//     evaluate: 3,
//     width: '100%',
//     alignContent: "center",
//     alignItems: 'center',
//     marginLeft: '1px',
//     marginRight: '1px',
//   },
//   textIntroduction: {
//     fontSize: 30,
//     textAlign: 'center',
//     padding: 20
//   }
// });
