import React, {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';

// import Spinner from 'react-native-loading-spinner-overlay';
// import {AuthContext} from '../context/AuthContext';

import { useSelector } from "react-redux";

import { BottomNavigation, Text } from 'react-native-paper';

import RegistrationScreen from '../screens/RegistrationScreen';
import { HomeTab } from '../components/HomeTab';

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

    

  return (

    // bottom tab
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    
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