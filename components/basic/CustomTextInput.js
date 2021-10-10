import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Colors from '../../constants/Colors';
import { FontAwesome5  } from '@expo/vector-icons';

const CustomTextInput = props => {
  return (
    <View style={styles.container}>
        <FontAwesome5 style={styles.iconStyle} name={props.icon} size={24} color="black" />
        <TextInput style={styles.defaut}
        {...props}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: '100%',
        flexDirection: 'row',
    },
    defaut: {
        flex: 1,
        height: 40,
        margin: 10,
        borderWidth: 1,
        paddingTop: 10,
        fontSize:20,
        fontFamily: 'open-sans',
        borderRadius: 4,
        borderColor: Colors.White,
        borderBottomColor: Colors.Black
    },
    iconStyle: {
      marginTop: 10,
      paddingTop: 10,
      paddingLeft:10,
      paddingRight: 0,
    }
  });

export default CustomTextInput;