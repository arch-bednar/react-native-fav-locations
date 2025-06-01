import {FlatList, View, Text, StyleSheet} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';


export default function CustomFlatList({style, locations, setLocations, navigation, database}) {

    function deleteFunction(key){    

      let v_id = -1;
      locations.forEach(row => {
        if (row.key === key)
          v_id = row.id
      })
      console.log(v_id);
      console.log(typeof v_id);
      try{
        database.execSync(`DELETE FROM locations WHERE id=${v_id}`, null);
      } catch(error){
          console.error('Błąd w transakcji – wykonano rollback:', err);
      }

      const remaining = database.getAllSync('SELECT id FROM locations;');
      console.log(remaining.map(r=> r.id));
      setLocations((prev) => prev.filter(item => item.key != key))
    }
 
    function editPosition(key){
      console.log('editposition ' + key)
      navigation.navigate('EditForm', {klucz: key});
    }

    function showHidePin(key, val){
      console.log('val: ' + val)
      console.log(locations.map(l => l.key));
      setLocations(prev => prev.map(item => item.key === key ? {...item, visible: val} : item));
    }

    return(
        <View style={[style, styles.view, styles.view_shape]}>
          <Text style={styles.header}>Lista zapisanych lokalizacji</Text>
        <FlatList style={[styles.list_shape]}
                  data={locations} 
                  keyExtractor={(item) => item.key.toString() }
                renderItem={ ({item}) => (
                    <View style={styles.item}>
                        <View style={styles.text}>
                          <Text style={styles.name}>{item.name}</Text>
                          <Text style={styles.coordinates}>lat: {item.latitude}{'\n'}lon: {item.longitude}</Text>
                        </View>
                        <View>
                          <CheckBox desabled={false} style={styles.checkbox} value={item.visible} onValueChange={(val) => showHidePin(item.key, val)}></CheckBox>
                        </View>
                        <TouchableOpacity style={[styles.touchableButton]}
                                          onPress={() => deleteFunction(item.key)}
                        >
                          <Octicons style={[styles.icon]} size={40} name="trash"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableButton}
                                          onPress={() => editPosition(item.key)}
                        >
                          <Octicons  size={40} name="pencil"/>
                        </TouchableOpacity>
                    </View>
                )}
        />
        </View>
    );

}

const styles = StyleSheet.create({
    view: {
      alignContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'white',
    },
    view_shape: {
      maxWidth: '95%',
      width: '100%',
      backgroundColor: 'white'
    },
    list_shape: {
      maxWidth: '95%',
      width: '100%',
      backgroundColor: 'white'
    },
    item: {
      borderBottomWidth: 1,
      borderColor: '#ccc',
      borderStyle: 'solid',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontSize: 20,
      padding: 20,
       flex: 4,
    },
    touchableButton: {
      borderWidth: 1,
      borderColor: 'lightgray',
      evaluate: 3,
      borderRadius: 12,
      flexDirection: 'column',
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      shadowColor: '#fff',
      shadowOffset: {
        width: -2,
        height: -2,
      },
      shadowOpacity: 1,
      shadowRadius: 3,
      marginRight: 5
    },  
    icon: {
      size: 20,
      alignItems: 'right',
      marginRight: '2%',

    },
    checkbox: {
      marginRight: '2%',
    },
    header:{
      marginBottom: '5%',
      marginTop: '5%',
      fontSize: 20
    },
    coordinates: {
      color: 'gray'
    },
    name: {
      fontSize: 20
    }

  });        