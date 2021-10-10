import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const BranchScreen = props => {
    return (
        <View style={styles.container}>
          <MapView style={styles.map}></MapView>
        </View>
    )
}


BranchScreen.navigationOptions = navigationData => {
    return {
      headerTitle: 'Branch'
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default BranchScreen;