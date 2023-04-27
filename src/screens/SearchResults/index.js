import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';


const SearchResults = () => {

  return (  
    <View>
        <HomeMap />
        <UberTypes />
    </View>
  )
}

export default SearchResults;


