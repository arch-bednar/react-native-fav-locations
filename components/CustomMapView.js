import React, { useState } from 'react';
import MapView,{ Marker } from 'react-native-maps';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//import Icon from 'react-native-vector-icons';
//import Icon from 'react-native-vector-icons/AntDesign';

export default function CustomMapView({style, onPinChange}) {

    //lista pinów 
    const [markers, setMarkers] = useState([]);
    const [currentPin, setCurrentPin] = useState(null);

    //zwraca koordynaty domyślnego pinu
    function returnPinCords(){
        if (currentPin == null){
            return ''
        }else{
            return currentPin.coordinate
        }
    }

    function handleMapPress(event){
        const coordinate = event.nativeEvent.coordinate;
        const key = Date.now().toString()
        const newMarker = {coordinate, key} 
        //setMarkers(coordinate);
        //setMarkers((prev) => [...prev, {coordinate}]);
        setMarkers((prev) => [...prev, newMarker]);
        setCurrentPin(coordinate);

        if (onPinChange){
            onPinChange(coordinate);
        }
    }



    return(
        <View style={[styles.container, style]}>
            <MapView style={styles.map}
                
                // onPress={(event) => {
                //     const coordinate = event.nativeEvent.coordinate;
                //     //setMarkers(coordinate);
                //     setMarkers((prev) => [...prev, {coordinate}]);
                //     setCurrentPin(coordinate);
                // }}
                onPress={handleMapPress}
            >
                {currentPin && (<Marker coordinate={currentPin}/>)}
                {markers.map((marker) => (
                    <Marker
                        coordinate={marker.coordinate}
                        pinColor='green'
                        key={marker.key}
                        // coordinate={coordinate}
                        // pinColor='green'
                        // key={key}
                    ></Marker>
                ))}
            </MapView>
            <TouchableOpacity style={styles.button}>
                <AntDesign name="pluscircle" size={60}/>
            </TouchableOpacity>
            {/* <Text>
                Current pin: {'\n'}
                latitude: {currentPin ? `${currentPin.latitude}` : ''}{'\n'}
                longitude: {currentPin ? `${currentPin.longitude}` : ''}
            </Text> */}
            {/* <Ionicons name="home" size={40} color="blue" /> */}
        </View>
    );


}

const styles = StyleSheet.create({
    map:{
        // flex: 1,
        width: '100%',
        height: '100%',
        // borderRadius: 12,
        // evaluate: 3,
        // borderWidth: 1,
        // alignSelf: 1
    },
    container:{
        flex: 1,
        width: '95%',
        height: '50%',
        minWidth: '95%',
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderRadius: 3,
        // evaluate: 3,
        // overflow: 'hidden'
    },
    textprop: {
       flex: 1,
    },
    button:{
        position: 'absolute',
        // backgroundColor: 'black',
        // bottom: 20,
        // right: 20,
        left: 20,
        bottom: 40
        // borderWidth: 1
        // borderWidth: 1,
        // borderRadius: 30
        
    }
});