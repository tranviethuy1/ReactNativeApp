import React,{useState} from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import Colors from '../../constants/Colors';
import DefaultText from './DefaultText';

const CustomSwitch = props => {
 
    const [onStatus, changeStatus] = useState(false);
     return (
        <View style={styles.container}>
            <DefaultText style={styles.switch}>{props.content}</DefaultText>
            <Switch {...props}
                trackColor={{ false: Colors.DarkGray, true: Colors.DeepPink }}
                thumbColor={onStatus ? Colors.HotPink : Colors.LightGrey}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(val) => changeStatus(val)}
                value={onStatus}
            />
        </View>
   );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        margin: 10,
        flexDirection: 'row',
    },
    switch:{
        fontFamily: 'open-sans',
        fontSize: 18,
        color: Colors.CornflowerBlue,
        textAlign: "center"
    }
  });

export default CustomSwitch;