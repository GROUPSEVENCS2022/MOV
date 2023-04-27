import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Travel only if necessary</Text>
        <Text style={styles.text}>offers mobility as a service, ride-hailing, vehicles for hire, motorized scooters, a bicycle-sharing system, rental cars, and food delivery in Uganda, selected cities .</Text>
        <Text style={styles.learnMore}>Learn More</Text>
    </View>    
  )
}

export default CovidMessage;