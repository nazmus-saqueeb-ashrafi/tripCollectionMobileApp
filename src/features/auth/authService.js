import axios from 'axios'
import api from "../../config/api";

const API_URL = api.main_api_url + 'auth/'

import AsyncStorage from '@react-native-async-storage/async-storage';


// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData)

  if (response.data) {
    AsyncStorage.setItem('user', JSON.stringify(response.data))
  }

  // window.location.reload()

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  console.log(JSON.stringify(response.data))

  if (response.data) {
    AsyncStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}



// Logout user
const logout = () => {
  AsyncStorage.removeItem('user')
}



const authService = {
  register,
  login,
  logout,

  
}

export default authService