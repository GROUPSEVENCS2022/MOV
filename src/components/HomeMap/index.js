import React from 'react'
import { View, Text, Image, FlatList } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = () => {
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
              {cars.map((car) => (
                  <Marker
                  key={car.id}
                  coordinate={{latitude: car.latitude, longitude: car.longitude}}
                >
                  <Image 
                  style={{
                    height: 80, 
                    width: 80, 
                    resizeMode: 'contain',
                    transform: [{
                      rotate: `${car.heading}deg`
                    }]
                  }}
                  source={getImage(car.type)}
                  />
                </Marker>)
              )}
            
                  
            </MapView>
  )
}

export default HomeMap;