// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import Home from './screens/Home';
import Form from './screens/Form';
import EditForm from './components/EditForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SQLite from 'expo-sqlite';

export default function App(){
  //return (<Home></Home>);

  const Stack = createNativeStackNavigator();
  const [locations, setLocations] = useState([]);
  
  function openDataBase(){

  }
  
  return (
    <SafeAreaProvider>
    <NavigationContainer style={style.nav}>
      <Stack.Navigator initialRouteName='Home'
        screenOptions = {{headerShown: false}}
      >
        <Stack.Screen name='Home'>
          {prop => <Home {...prop} locations={locations} setLocations={setLocations}></Home>}
        </Stack.Screen>
        <Stack.Screen name='Form'>
          {prop => <Form {...prop} locations={locations} setLocations={setLocations}></Form>}
        </Stack.Screen>
        <Stack.Screen name='EditForm'>
          {prop => <EditForm {...prop} locations={locations} setLocations={setLocations}></EditForm>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );

}

const style = StyleSheet.create({
  nav: {
    backgroundColor: '#FFF6F1',
  }

});