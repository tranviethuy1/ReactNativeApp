import React from 'react';
import { View, StyleSheet,  } from 'react-native';

const ItemButtonGroup = props => {
  return (
    <View style={styles.container}>
        {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width: 200,
    }
  });

export default ItemButtonGroup;