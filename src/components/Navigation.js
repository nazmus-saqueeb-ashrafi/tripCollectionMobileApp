import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import HomeScreen from '../screens/HomeScreen';

import { useSelector } from "react-redux";


export default function Navigation() {

  const Stack = createNativeStackNavigator();
  const { user } = useSelector(
    (state) => state.auth
  )

  return (      
    
    <NavigationContainer>
      <Stack.Navigator >

        {/* <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />  */}
         {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}

         {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}

        {user.user ? <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />  : <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />}

        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }} /> 
        

      </Stack.Navigator>
    </NavigationContainer>
    

    

    
    
  );
}
