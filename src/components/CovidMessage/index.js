import React, {useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import axios from 'axios';

const CovidMessage = () => {

  const [commuters, setCommuters] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.173:3000/pools')
      .then(response => {
        setCommuters(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Together lets fight traffic</Text>
        {commuters.map((commuter, index) => (
        <Text key={index}>{commuter.name}</Text>))}
        {/* <Text style={styles.text}>Lets start by avoiding massive gathering of cars and people</Text>
        <Text style={styles.learnMore}>The Mov app will get a car to you or a passenger to a car.</Text> */}
    </View>    
  )
}

export default CovidMessage;