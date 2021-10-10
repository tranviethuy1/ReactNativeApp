import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CustomButton = props => {
  return (
    <View style={styles.container}>
        <FontAwesome.Button style={styles.default} 
            {...props}
            mode='contained'
            name={props.icon} size={props.iconSize}
            color={Platform.OS === 'android' ? props.color : props.color}
            backgroundColor={props.backgroundColor}
        >
            <Text style={styles.content}>{props.children}</Text>
        </FontAwesome.Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: '80%',
        margin: 10
    },
    default: {
        justifyContent: 'center',
    },
    content: {
        color: '#ffffff',
        fontFamily: 'open-sans',
        fontSize: 20,
    }
  });

export default CustomButton;