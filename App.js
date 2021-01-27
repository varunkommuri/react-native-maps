import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View >
    <MapView style={{height:200}}
      initialRegion={{
        latitude:37.43600457610271,
        longitude: -122.15511465118503,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04
      }}

    />
      <View>
        <Text>Hi hello</Text>
      </View>
      </View>
     
    
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
