import React, {useState, useEffect} from 'react'
import { View, Text, Image, FlatList } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import cars from '../../assets/data/cars';

import {API, graphqlOperation} from 'aws-amplify';
// import cars from '../../assets/data/cars';
import { listCars } from '../../graphql/queries';

const HomeMap = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(
            listCars
          )
        )
        setCars(response.data.listCars.items);
        console.log(response.data.listCars.items);
      }
      catch(e) {
        console.error(e);
      }
    };
    fetchCars();
  },[])

  const lat = 0.3354670642213976;
  const long = 32.57583878879299;

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
              {cars.map(({id, latitude, longitude, heading, type}) => (
                  /* const childPropertyValue = item["child property"]; */
                  <Marker
                  key={id}
                  coordinate={{
                    latitude: longitude,
                    longitude: latitude,
                  }}
                >
                  {console.log(`${longitude}`)}
                  <Image 
                  style={{
                    height: 80, 
                    width: 80, 
                    resizeMode: 'contain',
                    transform: [{
                      rotate: `${heading}deg`
                    }]
                  }}
                  source={getImage(`${type}`)}
                  />
                </Marker>)
              )}
            
                  
            </MapView>
  )
}

export default HomeMap;