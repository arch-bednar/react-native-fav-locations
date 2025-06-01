import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import Home from './screens/Home';
import Form from './screens/Form';
import EditForm from './components/EditForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SQLite from 'expo-sqlite';

export default function App(){

  const Stack = createNativeStackNavigator();
  const [locations, setLocations] = useState([]);
  const [database, setDatabase] = useState(null);


  useEffect(() => {
    openDB();
  }, []);

  function openDB(){
    console.log('Database initialization: opening db_locations.db...');
    console.log('Typ opendatabase' + typeof SQLite);
    const db = SQLite.openDatabaseSync('db_locations.db');
    console.log('typeof db -> ' + typeof db);
    console.log(db);
    console.log('Creating tables...');
    createTable(db);
    console.log('Fetching data...')
    fetchData(db);
  }

  function createTable(db){
    db.execSync('CREATE TABLE IF NOT EXISTS locations(id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, longitude REAL, latitude REAL);');
  }

  function fetchData(db){
    const rows = db.getAllSync('SELECT * FROM locations;');
    for (let i = 0; i < rows.length; i++){
      console.log(`row ${i} ` + rows[i]);
      rows[i]['visible'] = false;
      rows[i]['key'] = String(Date.now()) + rows[i].id;
      console.log(rows[i]);
    }

    setLocations(rows);
    setDatabase(db);
  }
  
  return (
    <SafeAreaProvider>
    <NavigationContainer style={style.nav}>
      <Stack.Navigator initialRouteName='Home'
        screenOptions = {{headerShown: false}}
      >
        <Stack.Screen name='Home'>
          {prop => <Home {...prop} locations={locations} setLocations={setLocations} database={database}></Home>}
        </Stack.Screen>
        <Stack.Screen name='Form'>
          {prop => <Form {...prop} locations={locations} setLocations={setLocations} database={database}></Form>}
        </Stack.Screen>
        <Stack.Screen name='EditForm'>
          {prop => <EditForm {...prop} locations={locations} setLocations={setLocations} database={database}></EditForm>}
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