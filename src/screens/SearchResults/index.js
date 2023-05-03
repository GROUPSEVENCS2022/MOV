import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView, Dimensions } from 'react-native';
import styles from './styles';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';


const SearchResults = () => {

  return (  
    <View style={{display: 'flex', justifyContent: 'space-between', }}>
        <View style={{height: Dimensions.get('window').height - 400}}>
          <RouteMap />
        </View>
        <View style={{height: 400}}>
          <UberTypes />
        </View>
        
    </View>
  )
}

export default SearchResults;


