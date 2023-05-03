import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';


const DestinationSearch = () => {

  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const GOOGLE_MAPS_APIKEY = 'key';

  useEffect(() => {
    if(originPlace && destinationPlace)
    {
      console.warn(data='Redirect to results');
    }

  },[originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>

          <View style={styles.textInput}><GooglePlacesAutocomplete
            placeholder='From?'
            onPress={(data, details = null) => {
              setOriginPlace(value={data, details});
            }}
            style={{
              textInput: styles.textInput,
            }}
            fetchDetails
            focus
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
          /></View>

          <View style={styles.textInput}><GooglePlacesAutocomplete
            placeholder='Where To?'
            onPress={(data, details = null) => {
              setDestinationPlace({data, details});
            }}
            style={{
              textInput: styles.textInput,
            }}
            fetchDetails
            focus
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
          /></View>
          

      </View>
    </SafeAreaView>
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