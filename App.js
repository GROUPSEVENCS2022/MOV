import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
// import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';
import { useEffect } from 'react';

import 'react-native-gesture-handler';
import Router from './src/components/navigation/Root';

export default function App() {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Mov App Location Permission',
          message:
            'Mov App needs access to your location' +
            'so you can take awesome commutes.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if(Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
