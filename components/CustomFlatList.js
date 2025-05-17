import {FlatList, View, Text, StyleSheet} from 'react-native';
import { Ionicons, Entypo, Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function CustomFlatList({style}) {

    const data = [
                { key: "1", name: "blablabla"}, 
                {key: "2", name:"xxxxx"}, 
                {key: "3", name:"wwwwwwww"},
                {key: "4", name:"ceafrsgrsg"},
                {key: "5", name: "deaftgdt"},
                {key: "6", name: "dsfghjk"},
                {key: "7", name: "jhgfds"},
                {key: "8", name: "hytgfrdc"},
                {key: "(", name: "hytgfrdc"},
                {key: "x", name: "hytgfrdc"},
                {key: "w", name: "hytgfrdc"}
            ]

    const listHeader = () => <Text>Lista zapisanych lokalizacji</Text>;
 
    return(
        <View style={[style, styles.view, styles.view_shape]}>
          <Text style={styles.header}>Lista zapisanych lokalizacji</Text>
        <FlatList //style={styles.list_shape} 
                  style={[styles.list_shape]}
                  data={data} 
                  keyExtractor={(item) => item.key }
                  //ListHeaderComponent={listHeader} 
                renderItem={ ({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.name}</Text>
                        <TouchableOpacity style={[styles.touchableButton]}>
                          {/* <Ionicons style={styles.icon} size={40} name="trash"></Ionicons> */}
                          <Octicons style={[styles.icon]} size={40} name="trash"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableButton}>
                          {/* <Entypo style={styles.icon} size={40} name="pencil"/> */}
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
    iconTrash: {

    },
    header:{
      marginBottom: '5%',
      marginTop: '5%',
      fontSize: 20
    }

  });        