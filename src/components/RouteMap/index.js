import React from 'react'
import { View, Text, Image, FlatList } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({ origin, destination }) => {
  const lat = 0.3354670642213976;
  const long = 32.57583878879299;
  const GOOGLE_MAPS_APIKEY = 'key';

  /* const origin = {
    latitude: 0.3354670642213976,
  longitude: 32.56427878879299,
  }
  const destination = {
    latitude: 0.3380312117705973, 
    longitude: 32.58558057195873,
  } */

  const originLoc = { 
    // place.geometry.location.lat(),    
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.long,
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.long,
  };

  return (
            <MapView
              style={{width: '100%', height: '100%'}}
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              /* style={styles.map} */
              region={{
                latitude: lat, /* 37.78825 */
                longitude: long, /* -122.4324 */
                latitudeDelta: 0.028,
                longitudeDelta: 0.031,
              }}>
                <MapViewDirections
                  origin={originLoc}
                  destination={destinationLoc}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeColor="black"
                  strokeWidth={6}
                />
                <Marker
                  coordinate={origin}
                  title={'Origin'}
                />
                <Marker
                  coordinate={destination}
                  title={'Destination'}
                />
              </MapView>
  )
}
export default RouteMap;