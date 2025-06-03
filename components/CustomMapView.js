import { useState } from 'react';
import MapView,{ Marker } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Dialog from 'react-native-dialog';

export default function CustomMapView({style, onPinChange, navigation, locations, setLocations}) {

    //lista pinów 
    const [markers, setMarkers] = useState([]);
    const [currentPin, setCurrentPin] = useState(null);
    const [visible, setVisible] = useState(false);

    //zwraca koordynaty domyślnego pinu
    function returnPinCords(){
        if (currentPin == null){
            return '';
        }else{
            return currentPin.coordinate;
        }
    }

    function handleMapPress(event){
        //zmiana lokalizacji podstawowego pinu na mapie do zaznaczania
        const coordinate = event.nativeEvent.coordinate;
        setCurrentPin(coordinate);

        if (onPinChange){
            onPinChange(coordinate);
        }
    }

    function showDialog(){
        setVisible(true);
    }

    function closeDialog(){
        setVisible(false);
    }

    return(
        <View style={[styles.container, style]}>
            <Dialog.Container visible={visible}>
                <Dialog.Title>Pusty tekst</Dialog.Title>
                <Dialog.Description>Nie zaznaczono lokalizacji na mapie!</Dialog.Description>
                <Dialog.Button label="OK" onPress={closeDialog}/>
            </Dialog.Container>
            <MapView style={styles.map}
                onPress={handleMapPress}
            >
                {currentPin && (<Marker key='-xxx' pinColor='red' coordinate={currentPin}/>)}
                {locations.filter(marker => marker.visible === true).map((marker) => (
                    <Marker
                        coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                        pinColor='green'
                        key={marker.key}
                        visible={marker.visible}
                    ></Marker> 
                ))}
            </MapView>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    if (currentPin){
                        navigation.navigate('Form', {longitude: currentPin.longitude, latitude: currentPin.latitude})
                        setCurrentPin(null);
                    }else{
                        showDialog();
                    }

                }}
            >
                <AntDesign name="pluscircle" size={60}/>
            </TouchableOpacity>
        </View>
    );


}

const styles = StyleSheet.create({
    map:{
        width: '100%',
        height: '100%',
    },
    container:{
        flex: 1,
        width: '95%',
        height: '50%',
        minWidth: '95%',
    },
    textprop: {
       flex: 1,
    },
    button:{
        position: 'absolute',
        left: 20,
        bottom: 40
    }
});