import React, { useState } from 'react';
import { View, Text} from 'react-native';

const GiftScreen = props => {
    return (
        <View>
            <Text>Gift</Text>
        </View>
    )
}

GiftScreen.navigationOptions = navigationData => {
    return {
      headerTitle: 'Gift'
    };
};

export default GiftScreen;