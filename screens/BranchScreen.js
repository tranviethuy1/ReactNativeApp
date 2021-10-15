import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import Card from '../components/basic/Card'
import CircleImage from '../components/basic/CircleImage';
import DefaultText from '../components/basic/DefaultText';
import RowGroup from '../components/basic/RowGroup';
import { FontAwesome5  } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const BranchScreen = props => {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <RowGroup>
            <CircleImage style={{flex: 3, padding: 5,}}></CircleImage>
            <DefaultText style={{flex: 11, padding: 5,}}>Tòa nhà C5, 119 Trần Duy Hưng, Cầu Giấy, Hà Nội</DefaultText>
            <FontAwesome5.Button style={{flex: 1, }} 
              name="map-marker-alt" size={24} 
              color={Colors.CornflowerBlue} 
              backgroundColor={Colors.White}
              onPress = {() => {
                props.navigation.navigate(
                  'Map',
                  {
                    params: 'Map',
                  });
              }}
            >

            </FontAwesome5.Button>
          </RowGroup>
        </Card>
        <Card>
          <RowGroup>
            <CircleImage style={{flex: 3, padding: 5,}}></CircleImage>
            <DefaultText style={{flex: 11, padding: 5,}}>Tòa nhà C5, 119 Trần Duy Hưng, Cầu Giấy, Hà Nội</DefaultText>
            <FontAwesome5.Button style={{flex: 1, }} 
              name="map-marker-alt" size={24} 
              color={Colors.CornflowerBlue} 
              backgroundColor={Colors.White}
              onPress = {() => {
                props.navigation.navigate(
                  'Map',
                  {
                    params: 'Map',
                  });
              }}
            >

            </FontAwesome5.Button>
          </RowGroup>
        </Card>
        <Card>
          <RowGroup>
            <CircleImage style={{flex: 3, padding: 5,}}></CircleImage>
            <DefaultText style={{flex: 11, padding: 5,}}>Tòa nhà C5, 119 Trần Duy Hưng, Cầu Giấy, Hà Nội</DefaultText>
            <FontAwesome5.Button style={{flex: 1, }} 
              name="map-marker-alt" size={24} 
              color={Colors.CornflowerBlue} 
              backgroundColor={Colors.White}
              onPress = {() => {
                props.navigation.navigate(
                  'Map',
                  {
                    params: 'Map',
                  });
              }}
            >

            </FontAwesome5.Button>
          </RowGroup>
        </Card>
        <Card>
          <RowGroup>
            <CircleImage style={{flex: 3, padding: 5,}}></CircleImage>
            <DefaultText style={{flex: 11, padding: 5,}}>Tòa nhà C5, 119 Trần Duy Hưng, Cầu Giấy, Hà Nội</DefaultText>
            <FontAwesome5.Button style={{flex: 1, }} 
              name="map-marker-alt" size={24} 
              color={Colors.CornflowerBlue} 
              backgroundColor={Colors.White}
              onPress = {() => {
                props.navigation.navigate(
                  'Map',
                  {
                    params: 'Map',
                  });
              }}
            >

            </FontAwesome5.Button>
          </RowGroup>
        </Card>
        <Card>
          <RowGroup>
            <CircleImage style={{flex: 3, padding: 5,}}></CircleImage>
            <DefaultText style={{flex: 11, padding: 5,}}>Tòa nhà C5, 119 Trần Duy Hưng, Cầu Giấy, Hà Nội</DefaultText>
            <FontAwesome5.Button style={{flex: 1, }} 
              name="map-marker-alt" size={24} 
              color={Colors.CornflowerBlue} 
              backgroundColor={Colors.White}
              onPress = {() => {
                props.navigation.navigate(
                  'Map',
                  {
                    params: 'Map',
                  });
              }}
            >

            </FontAwesome5.Button>
          </RowGroup>
        </Card>
        <Card>
          <RowGroup>
            <CircleImage style={{flex: 3, padding: 5,}}></CircleImage>
            <DefaultText style={{flex: 11, padding: 5,}}>Tòa nhà C5, 119 Trần Duy Hưng, Cầu Giấy, Hà Nội</DefaultText>
            <FontAwesome5.Button style={{flex: 1, }} 
              name="map-marker-alt" size={24} 
              color={Colors.CornflowerBlue} 
              backgroundColor={Colors.White}
              onPress = {() => {
                props.navigation.navigate(
                  'Map',
                  {
                    params: 'Map',
                  });
              }}
            >

            </FontAwesome5.Button>
          </RowGroup>
        </Card>
        <Card>
        <RowGroup>
            <CircleImage style={{flex: 3, padding: 5,}}></CircleImage>
            <DefaultText style={{flex: 11, padding: 5,}}>Tòa nhà C5, 119 Trần Duy Hưng, Cầu Giấy, Hà Nội</DefaultText>
            <FontAwesome5.Button style={{flex: 1, }} 
              name="map-marker-alt" size={24} 
              color={Colors.CornflowerBlue} 
              backgroundColor={Colors.White}
              onPress = {() => {
                props.navigation.navigate(
                  'Map',
                  {
                    params: 'Map',
                  });
              }}
            >

            </FontAwesome5.Button>
          </RowGroup>
        </Card>
        <Card>
        <RowGroup>
            <CircleImage style={{flex: 3, padding: 5,}}></CircleImage>
            <DefaultText style={{flex: 11, padding: 5,}}>Tòa nhà C5, 119 Trần Duy Hưng, Cầu Giấy, Hà Nội</DefaultText>
            <FontAwesome5.Button style={{flex: 1, }} 
              name="map-marker-alt" size={24} 
              color={Colors.CornflowerBlue} 
              backgroundColor={Colors.White}
              onPress = {() => {
                props.navigation.navigate(
                  'Map',
                  {
                    params: 'Map',
                  });
              }}
            >

            </FontAwesome5.Button>
          </RowGroup>
        </Card>
      </ScrollView>
    )
}


BranchScreen.navigationOptions = navigationData => {
    return {
      headerTitle: 'Branch'
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default BranchScreen;