import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

// import Spinner from 'react-native-loading-spinner-overlay';
// import {AuthContext} from '../context/AuthContext';

import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
//   const {isLoading, login} = useContext(AuthContext);

const dispatch = useDispatch()

const { user } = useSelector(
        (state) => state.auth
    )

  return (
    <View style={styles.container}>
      {/* <Spinner visible={isLoading} /> */}
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Enter username"
          onChangeText={text => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={() => {
            // login(email, password);
            dispatch(login({username, password}))
            console.log(username, password)

          }}
          color="cadetblue"
          
          
        />

        

         {/* <TouchableOpacity
         style={styles.button}
         //   onPress={() => {
        //     login(email, password);
        //   }}
        >
         <Text> Login </Text>
        </TouchableOpacity> */}

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },

  button: {
    
    // borderRadius: 5,
    // alignItems: 'center',
    // backgroundColor: 'lightseagreen',
    
    // padding: 10
    
  }
});

export default LoginScreen;