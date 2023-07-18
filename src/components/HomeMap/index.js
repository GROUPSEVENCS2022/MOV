import React, {useState, useEffect} from 'react'
import { View, Text, Image, FlatList } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';
// import cars from '../../assets/data/cars';

import {API, graphqlOperation} from 'aws-amplify';
// import cars from '../../assets/data/cars';
import { listCars } from '../../graphql/queries';

const HomeMap = () => {

  const [cars, setCars] = useState();

  useEffect(() => {
    const fetchCars = () => {
      fetch(`http://192.168.1.173:3000/cars`)
        .then(response => {
          setCars(response.data);
        })
        .catch(error => {
          console.error('Error fetching car data:', error);
        });
    };
    fetchCars();
  },[])

  const fetchData = () => {
    axios.get(`http://192.168.1.173:3000/cars`)
      .then(response => {
        setCarData(response.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  };

  const lat = 0.334170682213926;
  const long = 32.57583878879249;

  const getImage = (type) => {
    if(type === 'Mov-Normal')
    {
      return require('../../assets/images/mov-Normal.png')
    }
    if(type === 'Mov-Shuttle')
    {
      return require('../../assets/images/mov-Shuttle.png')
    }
    return require('../../assets/images/mov-XL.png')
  }

  return (
            <MapView
              style={{width: '100%', height: '100%'}}
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              showsUserLocation={true}
              /* style={styles.map} */
              region={{
                latitude: lat, /* 37.78825 */
                longitude: long, /* -122.4324 */
                latitudeDelta: 0.025,
                longitudeDelta: 0.022,
              }}
              
            >
              {cars?.map((car) => (
                  <Marker
                  key={id}
                  coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                  }}
                >
                  {console.log(car?.latitude)}
                  <Image 
                  style={{
                    height: 80, 
                    width: 80, 
                    resizeMode: 'contain',
                    transform: [{
                      rotate: `${heading}deg`
                    }]
                  }}
                  source={getImage(type)}
                  />
                </Marker>)
              )}
            
                  
            </MapView>
  )
}

export default HomeMap;