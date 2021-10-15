import React from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Colors from '../../constants/Colors';

const CircleImage = props => {
  return (
    <TouchableHighlight style={styles.profileImgContainer}>
        <Image {...props} source={require('./../../assets/images/bank.png')} style={styles.profileImg} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
    profileImgContainer: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: Colors.CornflowerBlue, 
        borderWidth: 1,
      },
      profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
        resizeMode: 'center',
      },
  });

export default CircleImage;