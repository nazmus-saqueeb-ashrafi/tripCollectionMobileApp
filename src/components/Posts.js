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
import React, { useState } from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import tw from 'twrnc';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const avatar = require("../../assets/avatar.jpg");

const { width } = Dimensions.get("window");

import { useSelector, useDispatch } from 'react-redux'
import { getTimeLinePosts,createPost } from '../features/post/postSlice';
import { getUser } from '../features/user/userSlice';

import { useEffect } from "react";
import Post from './Post';


const LeftContent = props => {
  

  return (
   
   props.images?
    <Avatar.Image size={32} source={{uri : props.images[0]}}   />  

  :
    <Avatar.Icon {...props}  icon={"account-circle"} style={{ width: '100%', height:'100%' }} />
  
  )
}
  
  



export const Posts = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  //

  const dispatch = useDispatch()

  const { user } = useSelector(
    (state) => state.auth
  )

    useEffect(()=>{

      dispatch(getTimeLinePosts(user.user._id))
      dispatch(getUser(user)) // this populated the user state when the app first loads

    
    },[])


    let { timelinePosts, isLoading } = useSelector((state) => state.post);
    //

  return (
 
    <ScrollView
      style={{
        padding: SPACING,
        backgroundColor: colors.dark,
      }}
    >

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {timelinePosts ? timelinePosts
          .map((data) => (
       
            <Post key={data._id} data={data}/> 

          )):null}
      </View>
    </ScrollView>
    
  );
};


const styles = StyleSheet.create({});