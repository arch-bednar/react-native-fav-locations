import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomMapView from '../components/CustomMapView'
import { useState } from 'react';
import CustomFlatList from '../components/CustomFlatList';


export default function Home({navigation, locations, setLocations, database}) {

  const [currentCoords, setCurrentCoords] = useState(null);

  return (
    <SafeAreaProvider style={[styles.main_container, styles.background]}>
      <StatusBar style="auto" />
      <View style={[styles.container, styles.background]}>
        <Text style={styles.textIntroduction}>Moje ulubione miejsca</Text>
        <CustomMapView 
                      style={styles.mapContainer} 
                      onPinChange={setCurrentCoords} 
                      navigation={navigation}
                      locations={locations}
                      setLocations={setLocations}
        ></CustomMapView>
      </View>
      <View style={[styles.listPanel,  ]}>
        <CustomFlatList style={styles.list} 
                        locations={locations} 
                        setLocations={setLocations} 
                        navigation={navigation}
                        database={database}            
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF6F1',
  },
  main_container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign:'center',
    alignItems: 'center',
    paddingTop: '5%'
  },
  container: {
    flex: 4,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  textinput: {
    borderWidth: 1,
    width: '95%'
  },
  mapContainer: {
    flex: 1,
    borderRadius: 22,
    evaluate: 3,
    overflow: 'hidden'
  },
  listPanel: {
    flex: 2,
    width: '100%',
    alignContent: "center",
    alignItems: 'center',
    marginLeft: '1px',
    marginRight: '1px',
  },
  list: {
    flex: 2,
    // borderWidth: 1,
    borderRadius: 22,
    evaluate: 3,
    width: '100%',
    alignContent: "center",
    alignItems: 'center',
    marginLeft: '1px',
    marginRight: '1px',
    marginBottom: '12%'
  },
  textIntroduction: {
    fontSize: 30,
    textAlign: 'center',
    padding: 20
  }
});
