import React from 'react'
import tw from 'twrnc';

// import MapboxGL from '@react-native-mapbox-gl/maps';
// import MapView from 'react-native-maps';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import {useRef} from "react-native";

// import {
  
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   StyleSheet,
//   Pressable,
// } from 'react-native';

import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView } from 'react-native';


import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="account-circle" />

import { Post } from './Post';

// MapboxGL.setAccessToken('pk.eyJ1IjoibmF6bXVzLWEiLCJhIjoiY2t6dHE1cDV1NjM0ZjJvbzFzZjNzdnVleiJ9.X-ijQnMCi486JFIz2KBFww');


export const HomeTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}
      scrollEventThrottle={400}

      
      >
        <Post/>
        <Post/>
      </ScrollView>
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 5,
    
  },
});
