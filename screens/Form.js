import { StyleSheet } from 'react-native';
import LocationForm from '../components/LocationForm';

export default function Form({navigation, locations, setLocations, route, database}){
    return(
      <LocationForm style={styles.background} navigation={navigation} 
                    locations={locations} setLocations={setLocations} 
                    route={route}
                    database={database}
      />

    );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF6F1',
  }
});
