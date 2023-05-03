import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const UberTypeRow = (props) => {

  const {type} = props;

  const getImage = () => {
    if(type.type === 'UberXL')
    {
      return require('../../assets/images/UberX.jpeg')
    }
    if(type.type === 'Comfort')
    {
      return require('../../assets/images/Comfort.jpeg')
    }
    return require('../../assets/images/UberXL.jpeg')
  }



  return (  
    <View style={styles.container}>
      {/* Image */}
      <Image 
      style={styles.image} 
      source={getImage()}
      />
      {/*  middle container */}
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{'  '}
          <Ionicons name={'person'} size={16}/>
          3
        </Text>
        <Text style={styles.time}>
          8:03PM set off
        </Text>
      </View>
      {/* right container */}
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
        <Text style={styles.price}>
          {'  '}est. UGX{'  '}{type.price}
        </Text>
      </View>
    </View>
  )
}

export default UberTypeRow;


