import {Text, TextInput, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function LocationForm({style, navigation}){
    return(    
        <View style={[styles.form, style]}>
            <Text style={styles.title}>Edycja lokalizacji</Text>
            <TextInput style={styles.textbox} placeholder='Nazwa'></TextInput>
            <TextInput style={[styles.textbox]} keyboardType='numeric' placeholder='Longitude'></TextInput>
            <TextInput style={styles.textbox} keyboardType='numeric' placeholder='Latitude'></TextInput>
            {/* <Button style={styles.savebutton} title='Zapisz'/> */}
            <TouchableOpacity 
                style={styles.savebutton}
                onPress={()=>{
                    navigation.goBack();
                }}
            >
                <Text style={styles.text}>Zapisz</Text>
            </TouchableOpacity>
        </View>
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