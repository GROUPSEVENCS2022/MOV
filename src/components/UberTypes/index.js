import React from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow';
import typesData from '../UberTypeRow';


const UberTypes = () => {

  return (  
    <View>
        {typesData.map((type) => {
            <UberTypeRow type={type} />          
        })}        
    </View>
  )
}

export default UberTypes;


