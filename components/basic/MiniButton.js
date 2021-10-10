import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const MiniButton = props => {
  return (
    <Ionicons.Button style={styles.defaut}
      {...props}
      name={props.icon} size={props.iconSize}
      color={Platform.OS === 'android' ? props.color : props.color}
      backgroundColor={props.backgroundColor}
    >
     <Text style={styles.content}>{props.children}</Text>
    </Ionicons.Button >
  );
};

const styles = StyleSheet.create({
  defaut: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'open-sans',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
  },
  content: {
    color: '#ffffff',
    fontFamily: 'open-sans',
    fontSize: 16,
    color: Colors.CornflowerBlue,
    textDecorationLine: "underline"
  }
});

export default MiniButton;
