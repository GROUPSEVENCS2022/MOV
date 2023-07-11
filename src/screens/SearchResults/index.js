import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView, Dimensions } from 'react-native';
import styles from './styles';
import RouteMap from '../../components/RouteMap';
import MovTypes from '../../components/MovTypes';
import { useRoute } from '@react-navigation/native';


const SearchResults = () => {

  const {typeState} = useState(null);

  const originT = {
    latitude: 0.3354670642213976,
  longitude: 32.56427878879299,
  }
  const destinationT = {
    latitude: 0.3380312117705973, 
    longitude: 32.58558057195873,
  }

  const route = useRoute();

  console.log(route.params);
  const {originPlace, destinationPlace} = route.params;

  return (  
    <View style={{display: 'flex', justifyContent: 'space-between', }}>
        <View style={{height: Dimensions.get('window').height - 400}}>
          <RouteMap origin={originT} destination={destinationT} />
        </View>
        <View style={{height: 400}}>
          <MovTypes/>
        </View>
        
    </View>
  )
}

export default SearchResults;


