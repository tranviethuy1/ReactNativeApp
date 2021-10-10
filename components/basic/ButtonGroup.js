import React from 'react';
import { View, StyleSheet,  } from 'react-native';

const ButtonGroup = props => {
  return (
    <View style={styles.container}>
        {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: '100%',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
  });

export default ButtonGroup;