import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Card from '../components/basic/Card'
import CircleImage from '../components/basic/CircleImage';
import DefaultText from '../components/basic/DefaultText';
import RowGroup from '../components/basic/RowGroup';
import { FontAwesome5  } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const OpenAccScreen = props => {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <RowGroup>
            <CircleImage style={{flex: 3, padding: 5,}}></CircleImage>
            <DefaultText style={{flex: 11, padding: 5,}}>Tòa nhà C5, 119 Trần Duy Hưng, Cầu Giấy, Hà Nội</DefaultText>
            <FontAwesome5 style={{flex: 1, }} name="map-marker-alt" size={24} color={Colors.CornflowerBlue} />
          </RowGroup>
        </Card>
      </ScrollView>
    )
}

OpenAccScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Open Account'
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default OpenAccScreen;