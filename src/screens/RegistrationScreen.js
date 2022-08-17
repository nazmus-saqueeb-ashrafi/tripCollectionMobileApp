import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

// import Spinner from 'react-native-loading-spinner-overlay';
// import {AuthContext} from '../context/AuthContext';

import { register, reset } from '../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux'

const RegistrationScreen = ({navigation}) => {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmpass, setConfirmpass] = useState(null);

//   const {isLoading, register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* <Spinner visible={isLoading} /> */}
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={firstname}
          placeholder="Enter first name"
          onChangeText={text => setFirstname(text)}
        />

        <TextInput
          style={styles.input}
          value={lastname}
          placeholder="Enter last name"
          onChangeText={text => setLastname(text)}
        />

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

        <TextInput
          style={styles.input}
          value={confirmpass}
          placeholder="Enter confirm password"
          onChangeText={text => setConfirmpass(text)}
          secureTextEntry
        />

        <Button
          title="Register"
          color="cadetblue"
        //   onPress={() => {
        //     register(name, email, password);
        //   }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.link}>Login</Text>
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
});

export default RegistrationScreen;