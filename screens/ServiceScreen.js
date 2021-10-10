import React, { useState } from 'react';
import { View, Text } from 'react-native';

const ServiceScreen = props => {
    return (
      <View>
        <Text>Service</Text>
      </View>
    )
}

ServiceScreen.navigationOptions = navigationData => {
    return {
      headerTitle: 'Service'
    };
  };

export default ServiceScreen;