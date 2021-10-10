import React, { useState } from 'react';
import { View, Text } from 'react-native';

const OpenAccScreen = props => {
    return (
      <View>
        <Text>Open Account</Text>
      </View>
    )
}

OpenAccScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Open Account'
  };
};

export default OpenAccScreen;