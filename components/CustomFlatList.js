import {FlatList, View, Text, StyleSheet} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';


export default function CustomFlatList({style, locations, setLocations, navigation}) {

    function deleteFunction(key){       
      setLocations((prev) => prev.filter(item => item.key != key))
    }
 
    function editPosition(key){
      console.log('editposition ' + key)
      navigation.navigate('EditForm', {klucz: key});
    }

    function showHidePin(key, val){
      console.log('val: ' + val)
      setLocations(prev => prev.map(item => item.key === key ? {...item, visible: val} : item));
    }

    return(
        <View style={[style, styles.view, styles.view_shape]}>
          <Text style={styles.header}>Lista zapisanych lokalizacji</Text>
        <FlatList //style={styles.list_shape} 
                  style={[styles.list_shape]}
                  data={locations} 
                  keyExtractor={(item) => item.key }
                  //ListHeaderComponent={listHeader} 
                renderItem={ ({item}) => (
                    <View style={styles.item}>
                        <View style={styles.text}>
                          <Text style={styles.name}>{item.name}</Text>
                          <Text style={styles.coordinates}>({item.latitude}, {item.longitude})</Text>
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
      // flexDirection: 'row',
      // alignContent: 'center',
      // alignItems: 'center',
      // elevate: 3,
      // borderWidth: 1,
      // borderRadius: 22,
      maxWidth: '95%',
      width: '100%',
      backgroundColor: 'white'
    },
    list_shape: {
      // flexDirection: 'row',
      // alignContent: 'center',
      // alignItems: 'center',
      // elevate: 3,
      // borderWidth: 1,
      // borderRadius: 10,
      maxWidth: '95%',
      width: '100%',
      backgroundColor: 'white'
    },
    item: {
      // padding: 12,
      borderBottomWidth: 1,
      // marginBottom: '0.25%',
      // borderRadius: 12,
      borderColor: '#ccc',
      borderStyle: 'solid',
      // elevation: 3,
      //maxWidth: '90%',
      // marginLeft: '1px',
      // marginRight: '1px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    //   height: '15%'
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
      // backgroundColor: 'lightgray',
      //alignContent: 'center',
      //alignItems: 'center',
      flexDirection: 'column',
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      //height: 50,
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
      //flex: 1,
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