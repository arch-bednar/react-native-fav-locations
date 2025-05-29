import {Text, TextInput, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import {useState} from 'react';
// import DialogEmptyText from './DialogEmptyText';
import Dialog from 'react-native-dialog';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function LocationForm({style, navigation, locations, setLocations, route}){

    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);

    function Zapisz(route){
        let index = 0;
        console.log(typeof(locations))
        for (let i = 0; i < locations.length; i++){
            console.log('key: ' + locations[i].key);
            if (locations[i].key >= index){
                index = locations[i].key;
            }
        }
        //console.log(index);
        index++;
        setLocations((prev) => [...prev, {key: index, name: text, latitude: route.params.latitude, longitude: route.params.longitude, visible: false}]);
    }
    
    function showDialog(){
        setVisible(true);
    }

    function closeDialog(){
        setVisible(false);
    }

    return(    
        <SafeAreaProvider style={[styles.form, style]}>

            <Dialog.Container visible={visible}>
                <Dialog.Title>Pusty tekst</Dialog.Title>
                <Dialog.Description>Wprowadzono pustą nazwę znacznika!</Dialog.Description>
                <Dialog.Button label="OK" onPress={closeDialog}/>
            </Dialog.Container>

            <Text style={styles.title}>Nowa lokalizacja</Text>

            <TextInput style={styles.textbox} 
                        placeholder='Nazwa' 
                        onChangeText={setText} 
                        text={text}/>

            <TouchableOpacity 
                style={styles.savebutton}
                onPress={()=>{
                    if (!text){
                        showDialog();
                    }else{
                        Zapisz(route);
                        navigation.goBack();
                    }
                }}
            >
                <Text style={styles.text}>Zapisz</Text>
            </TouchableOpacity>
            
        </SafeAreaProvider>
    );

}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        textAlign: 'center',
        padding: 20
    },
    textbox:{
        borderWidth: 1,
        borderStyle: 'solid',
        height: '5%',
        width: '95%',
        marginBottom: '5%',
        evaluate: 3,
        borderRadius: 22
    },
    savebutton:{
        width: '95%',
        height: '5%',
        backgroundColor: '#2196F3',
        alignContent: 'center',
        justifyContent: 'center',
        evaluate: 3,
        borderRadius: 8,
        backgroundColor: '#A9746E'
    },
    text:{
        textAlign: 'center',
        color: 'white'
    }
    
});