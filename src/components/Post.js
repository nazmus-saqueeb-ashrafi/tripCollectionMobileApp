import tw from 'twrnc';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import SPACING from "../config/SPACING";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import api from '../config/api';


const Post = ({data}) => {

  // Logic for getting the user who made this post and others
    const postMakerUserId = data.userId; 
    const [postMakerUser, setPostMakerUser] = useState({});

    useEffect(() => {
      const fetchPostMakerUser = async () => {
        const profileUser = await axios.get(api.main_api_url + 'post/'+ postMakerUserId + "/getanyuser")

        setPostMakerUser(profileUser.data);
      }

      fetchPostMakerUser();

    }, [data]);
    //

    const LeftContent = props => {
  
      return (
      
        postMakerUser && postMakerUser.profileImage != undefined && postMakerUser.profileImage.length>0 ?
          <Avatar.Image size={32} source={{uri : postMakerUser.profileImage[0]}}/>  

        :
          <Avatar.Icon {...props}  icon={"account-circle"} style={{ width: '100%', height:'100%' }} />
      
      )
    }




  return (
    <View key={data._id} style={tw`p-4 pt-0 android:pt-2 bg-stone-900 dark:bg-stone-900`}>
              

              <Card style={tw`bg-stone-800 dark:bg-stone-800 rounded-xl`}>
                  <Card.Title title={data.title} left={()=>LeftContent(data)} style={tw`bg-stone-800 dark:bg-stone-800 rounded-xl`} titleStyle={tw`text-zinc-50 `}/>
                  <Card.Content>
                      {/* <Title>Card title</Title> */}
                      <Paragraph style={tw`pt-0 pb-4 android:pt-0 bg-stone-800 dark:bg-stone-800 text-zinc-50`}>{data.description}</Paragraph>
                  </Card.Content>
                  {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                  {/* <Card.Cover source={<MapView style={styles.map} />}/> */}
                  <MapView style={{ width: '100%', aspectRatio: 2 }} zoomTapEnabled={false}
                  initialCamera={{
                    center: { latitude: data.latitude,  longitude: data.longitude },
                    pitch: 0,
                    zoom: 18,
                    heading: 0,
                    altitude: 1000,
                  }}
                  >
                    <Marker
                      coordinate={{latitude: data.latitude,  longitude: data.longitude}}
                      pinColor="cornflowerblue" />
                  
                  </MapView>
                  <View style={{flexDirection: "row",
                    justifyContent: "space-between"}}>
                      
                    <Card.Actions >
                    
                      <Button>Cancel</Button>
                      <Button>Ok</Button>
                      <Button icon="camera" mode="elevated" onPress={() => console.log('Pressed')}>
                        Press me
                      </Button>
                    
                       {/* heart-btn // stats(1 like, 2 comments) // details-btn */}
                      
                      
                    </Card.Actions>
                  </View>
                  
                  
                  
              </Card>
                
            </View>
  )
}

const styles = StyleSheet.create({
  
});

export default Post;


