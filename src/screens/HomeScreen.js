import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";

// import Spinner from 'react-native-loading-spinner-overlay';
// import {AuthContext} from '../context/AuthContext';

import { useSelector } from "react-redux";

import { BottomNavigation } from 'react-native-paper';

import RegistrationScreen from '../screens/RegistrationScreen';
import { HomeTab } from '../components/HomeTab';
import colors from "../config/colors";

import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';



const HomeScreen = () => {
//   const {userInfo, isLoading, logout} = useContext(AuthContext);

const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'follows', title: 'Follows', focusedIcon: 'account-group', unfocusedIcon: 'account-group-outline'},
    { key: 'create', title: 'Create', focusedIcon: 'google-maps', unfocusedIcon: 'map-marker-outline'},
    { key: 'target', title: 'Target', focusedIcon: 'bullseye-arrow', unfocusedIcon: 'bullseye' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeTab, // HomeTab = UnexpandedPostMaker,PostMaker, Post
    follows: RegistrationScreen,
    create: RegistrationScreen,
    target: RegistrationScreen,
    profile: RegistrationScreen,
  });

    const { user } = useSelector(
        (state) => state.auth
    )

    
     const avatar = require("../../assets/avatar.jpg");
    

    
  


  const { width } = Dimensions.get("window");

    

  return (

    <>

      <SafeAreaView style={{ flex:0, backgroundColor: colors.dark, padding: SPACING, paddingBottom: 0 ,
        backgroundColor: colors.dark }}>

        <StatusBar hidden />
        
        {/* nav */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: SPACING,
            paddingLeft: SPACING,
          }}
        >
          {/* logo */}
          <TouchableOpacity
            style={{
              borderRadius: SPACING,
              overflow: "hidden",
              width: SPACING * 15,
              height: SPACING * 4,
              // marginBottom: SPACING,
              margin: SPACING,
              marginBottom: 0,
              marginTop: 0,
              
            }}
          >
            {/* <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="menu"
                size={SPACING * 2.5}
                color={colors.secondary}
              />
              <Text>hi</Text>
            </BlurView> */}

            <Text style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                color: colors.primary,
                fontSize: 25,
                fontFamily: "Bodoni 72",
                fontStyle: 'italic',
                letterSpacing: 1,
                
              }}>Travelverse</Text>
          </TouchableOpacity>
          
          {/* display picture */}
          <View
            style={{
              width: SPACING * 4,
              height: SPACING * 4,
              overflow: "hidden",
              borderRadius: SPACING,
              backgroundColor: 'black',
              
              
            }}
          >
            <BlurView
              style={{
                height: "100%",
                padding: SPACING / 2,

                
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: SPACING,
                  
                }}
                
                source = {user && user.user.profileImage ? user.user.profileImage : avatar}
              />
            </BlurView>
          </View>
        </View>
        
      </SafeAreaView>

    
      {/* bottom tabs */}
      <BottomNavigation
        barStyle={{ backgroundColor: colors['dark'] }}
        activeColor={colors.secondary}
        inactiveColor={colors.secondary}
        
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}

        labeled={false}
        sceneAnimationEnabled={true}
        sceneAnimationType={'shifting'}
        safeAreaInsets={{ bottom: 15 }}
        
      />
    </>

    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default HomeScreen;