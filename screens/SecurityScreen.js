import React, { useState } from 'react';
import { View, Text } from 'react-native';

const SecurityScreen = props => {
    return (
        <View>
            <Text>Security</Text>
        </View>
    )
}

SecurityScreen.navigationOptions = navigationData => {
    return {
      headerTitle: 'Security'
    };
};

export default SecurityScreen;