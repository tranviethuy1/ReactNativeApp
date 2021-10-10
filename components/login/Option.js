import React from 'react';
import { View, StyleSheet,  } from 'react-native';
import MiniButton from '../basic/MiniButton';
import Colors from '../../constants/Colors';
import DefaultText from '../basic/DefaultText';

const Option = props => {
  return (
    <View style={styles.container}>
        <MiniButton icon={props.icon}                    
            iconSize={props.size} 
            backgroundColor={Colors.White} 
            color={Colors.CornflowerBlue}
            onPress = {() => {
              props.navigation.navigate(
                props.content,
                {
                  route: props.content,
                });
            }}
          ></MiniButton>
        <DefaultText>{props.content}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: 100,
        flexDirection: 'column',
    },
  });

export default Option;