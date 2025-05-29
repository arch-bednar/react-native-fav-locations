import {Text, TextInput, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import cloneDeep from 'lodash/cloneDeep';
import Dialog from 'react-native-dialog';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function EditForm({style, locations, setLocations, route, navigation}){

    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);
    

    function Zapisz(key){
        let array = cloneDeep(locations);

        console.log('klucz ' + key)
        for (let i = 0; i < array.length; i++){
            console.log('Array: ' + array[i].key);
            console.log(key == array[i].key);
            if (key == array[i].key){
                array[i].name = text;
                console.log('Text: ' + text);
            }
        }
        setLocations(array);
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
            <Text style={styles.title}>Edycja lokalizacji</Text>
            <TextInput style={styles.textbox} 
                        placeholder='Nazwa' 
                        onChangeText={setText} 
                        text={text}/>

            {/* <TextInput style={[styles.textbox]} 
                        // keyboardType='numeric' 
                        placeholder='Longitude'
                        editable={false}
                        text={route.longitude}
                        />

            <TextInput style={styles.textbox} 
                        // keyboardType='numeric' 
                        placeholder='Latitude'
                        editable={false}
                        text={route.latitude}
            /> */}
            {/* <Button style={styles.savebutton} title='Zapisz'/> */}
            <TouchableOpacity 
                style={styles.savebutton}
                onPress={()=>{
                    if (!text){
                        showDialog();
                    }else{
                        Zapisz(route.params.klucz);
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