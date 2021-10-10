import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const DefaultText = props => {
  return <Text style={styles.default} {...props}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: Colors.CornflowerBlue,
    textAlign: "center"
  }
});

export default DefaultText;
