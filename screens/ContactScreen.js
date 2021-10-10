import React, { useState } from 'react';
import { View, Text } from 'react-native';

const ContactScreen = props => {
    return (
        <View>
            <Text>Contact</Text>
        </View>
    )
}

ContactScreen.navigationOptions = navigationData => {
    return {
      headerTitle: 'Contact'
    };
};

export default ContactScreen;