import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Modal, SafeAreaView, Dimensions, Pressable } from 'react-native';
import styles from './styles';
import RouteMap from '../../components/RouteMap';
import MovTypes from '../../components/MovTypes';
import { useRoute } from '@react-navigation/native';
import CarList from '../../components/CarList';
import PoolList from '../../components/PoolList';



const SearchResults = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const onPressHandler = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleJoin = () => {
    // Perform join action
    console.log('Join button pressed!');
    closeModal();
  };

  const route = useRoute();

  const originT = {
    latitude: 0.3354670642213976,
  longitude: 32.56427878879299,
  }
  const destinationT = {
    latitude: 0.3380312117705973, 
    longitude: 32.58558057195873,
  }

  //const route = useRoute();

  //console.log(route.params);
  //const {originPlace, destinationPlace} = route.params;

  const newCommuter = {
    name: "Adrone Mickie",
    destination: "Kasubi",
    origin: "Makindye",
  };

  fetch('http://192.168.1.173:3000/commuters', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newCommuter),
})
  .then(response => response.json())
  .then(data => {
    console.log('New commuter added:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  return (  
    <View style={{display: 'flex', justifyContent: 'space-between', }}>
        <View style={{height: Dimensions.get('window').height - 400}}>
          <RouteMap origin={originT} destination={destinationT} />
        </View>
        <View style={{height: 400}}>
          <Pressable onPress={onPressHandler}>
            <CarList />
          </Pressable>          
        </View>
        <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Virtual Stage details</Text>
            <PoolList />
          <Pressable onPress={handleJoin} style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join Pool</Text>
          </Pressable>
        </View>
      </Modal>
        
    </View>
  )
}

export default SearchResults;


