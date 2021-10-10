import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const CustomImage = props => {
  return (
    <View style={styles.container}> 
        <Image style={styles.defaut}
        {...props}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: '100%',
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    defaut: {
        height: 100,
        width: '80%'
    },
  });

export default CustomImage;