import { StyleSheet } from 'react-native';
import LocationForm from '../components/LocationForm';



export default function Form({navigation, locations, setLocations, route}){
    return(
        <LocationForm style={styles.background} navigation={navigation} 
                      locations={locations} setLocations={setLocations} 
                      route={route}
        />
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
    // backgroundColor: '#FFF6F1',
    textAlign:'center',
    alignItems: 'center',
    //alignContent: 'center',
    paddingTop: '5%'
  },
  container: {
    flex: 4,
    width: '100%',
    backgroundColor: '#fff',
    // alignSelf: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'center',
    // alignContent: 'center'
    marginBottom: '5%',
    // borderWidth: 1,
    // borderRadius: 3
  },
  map: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textinput: {
    //flex: 1,
    borderWidth: 1,
    width: '95%'
  },
  mapContainer: {
    flex: 1,
    borderRadius: 22,
    evaluate: 3,
    overflow: 'hidden'
  },
  form: {
    // flex: 1,
    width: '100%',
    marginBottom: '1px',
  },
  listPanel: {
    flex: 2,
    // borderWidth: 1,
    // borderRadius: 22,
    // evaluate: 3,
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
  },
  textIntroduction: {
    fontSize: 30,
    textAlign: 'center',
    padding: 20
  }
});
