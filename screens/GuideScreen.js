import React, { useState } from 'react';
import { View, Text} from 'react-native';

const GuideScreen = props => {
    return (
        <View>
            <Text>Guide</Text>
        </View>
    )
}

GuideScreen.navigationOptions = navigationData => {
    return {
      headerTitle: 'Guide'
    };
};

export default GuideScreen;