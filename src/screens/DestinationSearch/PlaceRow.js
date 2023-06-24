import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';


const PlaceRow = (data) => {
  return (
    <View style={styles.row}>
        <View style={styles.iconContainer}>
            {data.description === 'Home' 
            ? <Entypo name='home' size={20} color={'white'} />
            : <Entypo name='location-pin' size={20} color={'white'} />
          }
        </View>
        <Text style={styles.locationText}>{data.description || data.vivinity}</Text>
    </View>
  )
}

export default PlaceRow;
