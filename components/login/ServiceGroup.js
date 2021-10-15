import React from 'react';
import { ScrollView, StyleSheet,  } from 'react-native';
import Service from './Service';

const ServiceGroup = props => {
  return (
    <ScrollView style={styles.container} horizontal={true} 
      showsHorizontalScrollIndicator={false} scrollToOverflowEnabled={true} pagingEnabled={true}>
        <Service icon="person-add" size={30} content="Account" navigation={props.navigation}></Service>
        <Service icon="location" size={30} content="Branch" navigation={props.navigation}></Service>
        <Service icon="document" size={30} content="Guide" navigation={props.navigation}></Service>
        <Service icon="help-circle" size={30} content="Security" navigation={props.navigation}></Service>
        <Service icon="gift" size={30} content="Gift" navigation={props.navigation}></Service>
        <Service icon="chatbox" size={30} content="Contact" navigation={props.navigation}></Service>
        <Service icon="construct" size={30} content="Service" navigation={props.navigation}></Service>
        <Service icon="analytics" size={30} content="Stock" navigation={props.navigation}></Service>
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

export default ServiceGroup;