import React, { useState } from 'react';
import { View, Text} from 'react-native';

const StockScreen = props => {
    return (
        <View>
            <Text>Stock</Text>
        </View>
    )
}

StockScreen.navigationOptions = navigationData => {
    return {
      headerTitle: 'Stock'
    };
};

export default StockScreen;