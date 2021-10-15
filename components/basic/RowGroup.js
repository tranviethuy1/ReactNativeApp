import React from 'react';
import { View, StyleSheet,  } from 'react-native';

const RowGroup = props => {
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
  });

export default RowGroup;