import React from 'react'
import tw from 'twrnc';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="account-circle" />

export const Post = () => {
  return (
    <View style={tw`p-4 android:pt-2 bg-white dark:bg-black`}>
        {/* <Text style={tw`text-md text-black dark:text-white`}>Hello World</Text> */}

        <Card>
            <Card.Title title="Card Title" left={LeftContent} />
            <Card.Content>
                {/* <Title>Card title</Title> */}
                <Paragraph style={tw`p-4 android:pt-0 bg-white dark:bg-black`}>Card content Card contentCard contentCard contentCard content Card contentCard content</Paragraph>
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            {/* <Card.Cover source={<MapView style={styles.map} />}/> */}
            <MapView style={{ width: '100%', aspectRatio: 1 }} zoomTapEnabled={false}
            initialCamera={{
              center: { latitude: -4.143009,  longitude: -40.582803 },
              pitch: 0,
              zoom: 18,
              heading: 0,
              altitude: 1000,
            }}
            >
              <Marker
                coordinate={{latitude: -4.143009,  longitude: -40.582803}}
                pinColor="cornflowerblue" />
            
            </MapView>
            <Card.Actions>
              
                <Button>Cancel</Button>
                <Button>Ok</Button>
                <Button icon="camera" mode="elevated" onPress={() => console.log('Pressed')}>
                  Press me
                </Button>
                
            </Card.Actions>
            
            
        </Card>
        
    </View>
  )
}

const styles = StyleSheet.create({
  
});
