import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Together lets fight traffic</Text>
        <Text style={styles.text}>Lets start by avoiding massive gathering of cars and people</Text>
        <Text style={styles.learnMore}>The Mov app will get a car to you or a passenger to a car.</Text>
    </View>    
  )
}

export default CovidMessage;