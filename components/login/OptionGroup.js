import React from 'react';
import { ScrollView, StyleSheet,  } from 'react-native';
import Option from './Option';

const OptionGroup = props => {
  return (
    <ScrollView style={styles.container} horizontal={true} 
      showsHorizontalScrollIndicator={false} scrollToOverflowEnabled={true} pagingEnabled={true}>
        <Option icon="person-add" size={30} content="Account" navigation={props.navigation}></Option>
        <Option icon="location" size={30} content="Branch" navigation={props.navigation}></Option>
        <Option icon="document" size={30} content="Guide" navigation={props.navigation}></Option>
        <Option icon="help-circle" size={30} content="Security" navigation={props.navigation}></Option>
        <Option icon="gift" size={30} content="Gift" navigation={props.navigation}></Option>
        <Option icon="chatbox" size={30} content="Contact" navigation={props.navigation}></Option>
        <Option icon="construct" size={30} content="Service" navigation={props.navigation}></Option>
        <Option icon="analytics" size={30} content="Stock" navigation={props.navigation}></Option>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: '100%',
        flexDirection: 'row',
    },
  });

export default OptionGroup;