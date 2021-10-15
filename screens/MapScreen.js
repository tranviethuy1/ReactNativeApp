import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';

const MapScreen = props => {
    return (
        <View style={styles.container}>
          <MapView style={styles.map}     
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>

          </MapView>
        </View>
    )
}


MapScreen.navigationOptions = navigationData => {
    return {
      headerTitle: 'Location'
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;