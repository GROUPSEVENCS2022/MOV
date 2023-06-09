import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import PlaceRow from './PlaceRow';
import styles from './styles';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 0.3354670642213976, lng: 32.57583878879299}},
};

const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 0.3364670642213976, lng: 32.58583878879299}},
};


// import Geolocation from 'react-native-geolocation-service';
// import Geolocation from '@react-native-community/geolocation';

/* Geolocation.getCurrentPosition(info => console.log(info));
navigator.geolocation = require('react-native-geolocation-service'); */


const DestinationSearch = () => {

  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDytX2Y8BTCdtT0iOsKcPX_CFHGCpiuT9E';

  const navigation = useNavigation();

  const checkNavigation = () => {
    if(originPlace && destinationPlace)
    {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })
      /* console.warn(data='Redirect to results'); */
    }
  }

  useEffect(() => {
    checkNavigation();

  },[originPlace, destinationPlace]);

  return (
    <>
      <View style={styles.container}>
          {/* <View style={styles.innerContainer}> */}
          <GooglePlacesAutocomplete
            placeholder='From?'
            onPress={(data, details = null) => {
              setOriginPlace({data, details});
            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            currentLocation={true}
            currentLocationLabel='Current Location'
            styles={{
              textInput: styles.textInput,
              container: styles.autocompleteContainer,
              separator: styles.separator,
              listView: styles.listView,
            }}
            fetchDetails
            focus
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            renderRow={(data) => <PlaceRow data={data} style={{color: 'black'}}/>}
            renderDescription={(data) => data.description || data.vicinity}
            predefinedPlaces={[homePlace, workPlace]}
          />{/* </View> */}

          <GooglePlacesAutocomplete
            placeholder='Where To?'
            onPress={(data, details = null) => {
              setDestinationPlace({data, details});
            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            styles={{
              textInput: styles.textInput,
              container: {
                ...styles.autocompleteContainer,
              top: 55,
            },
              separator: styles.separator,
              listView: styles.listView,
            }}
            fetchDetails
            focus
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            renderRow={(data) => <PlaceRow data={data}/>}
          />

          {/*circle near origin input*/}
          <View style={styles.circle} />
          {/*line between dots*/}
          <View style={styles.line} />
          {/*Square near destination input*/}
          <View style={styles.square} />
          {/* </View>  */}      

      </View>
    </>
  )
}

export default DestinationSearch;



          {/* 
          
          const [fromText, setFromText] = useState('');
          const [destinationText, setDestinationText] = useState('');
          
          <TextInput 
          value={fromText}
          onChangeText={setFromText}
          style={styles.textInput} placeholder='From' 
          />
          
          <TextInput 
          value={destinationText}
          onChangeText={setDestinationText}
          style={styles.textInput} placeholder='Where To' 
          /> */}