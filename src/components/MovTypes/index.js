import React from 'react'
import { View, Text, TextInput, SafeAreaView, Pressable } from 'react-native';
import styles from './styles';
import MovTypeRow from '../MovTypeRow';
/* import typesData from '../MovTypeRow'; */
import typesData from '../../assets/data/types';


const MovTypes = ({typeState}) => {

  const [type, setType] = typeState;
  const confirm = () => {
    console.warn('confirm');
  }

  return (  
    <View>  
        {typesData.map(type => 
        <MovTypeRow type={type} key={type.id} />)}

      <Pressable onPress={confirm} style={{
        width: '95%',
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{color: 'white', fontWeight: 'bold', borderRadius: 4,}}>
          Confirm Commute
        </Text>
      
      </Pressable>   
    </View>

    
  )
}

export default MovTypes;


