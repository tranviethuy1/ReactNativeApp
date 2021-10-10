import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, View} from 'react-native';
import Colors from './../constants/Colors';
import MiniButton from './../components/basic/MiniButton';
import CustomTextInput from './../components/basic/CustomTextInput';
import CustomImage from './../components/basic/CustomImage';
import CustomButton from './../components/basic/CustomButton';
import CustomButtonGroup from './../components/basic/ButtonGroup';
import ItemButtonGroup from './../components/basic/ItemButtonGroup';
import CustomSwitch from './../components/basic/CustomSwitch';
import OptionGroup from '../components/login/OptionGroup';

const LoginScreen = props => {
    
    return (
        <KeyboardAvoidingView       
            behavior="padding"
            keyboardVerticalOffset={0}
            style={styles.container}>
            <View style={styles.switch}> 
            <CustomSwitch content="VI"></CustomSwitch>
            </View>
            <View style={styles.image}>
            <CustomImage source={require('./../assets/images/way4.png')}></CustomImage> 
            </View>
            <View style={styles.form}>     
            <CustomTextInput placeholder="Phone Number" icon="user"></CustomTextInput>
            <CustomTextInput placeholder="Password" icon="key"></CustomTextInput>
            <CustomButton icon="sign-in" iconSize={30} 
                backgroundColor={Colors.CadetBlue} color={Colors.White}> Sign in</CustomButton>
            <CustomButtonGroup>
                <ItemButtonGroup>
                <MiniButton icon="create-outline" 
                    iconSize={20} 
                    backgroundColor={Colors.White} 
                    color={Colors.CornflowerBlue}>Online Banking</MiniButton>
                </ItemButtonGroup>
                <ItemButtonGroup>
                <MiniButton icon="ios-key-outline" 
                    iconSize={20} 
                    backgroundColor={Colors.White} 
                    color={Colors.CornflowerBlue}>Forgot password</MiniButton>
                </ItemButtonGroup>
            </CustomButtonGroup>
            </View>
            <View style={styles.option}>
                <OptionGroup navigation={props.navigation}></OptionGroup>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    switch: {
      marginTop: '15%',
      width: '100%',
      alignItems: 'flex-end'
    },
    image: {
      marginTop: '25%',
      width: '100%'
    },
    form: {
      width: '100%',
      alignItems: 'center',
    },
    option: {
        marginTop: '45%',
        width: '100%',
    }
});

export default LoginScreen;