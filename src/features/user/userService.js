import axios from 'axios'
import api from "../../config/api";

const API_URL = api.main_api_url + 'user/'

// Get user
// @route   GET /user/:id
// Private route
const getUser = async (user) => {

    // console.log(user.user._id)

    const id = user.user._id
    const token = user.token
    

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    
    
    const response = await axios.get(API_URL + id, config)

    // console.log(response.data)
    return response.data

    
   
  
}

// Dismiss notifications
// @route   PUT /user/:id
const dismissNotifications = async (userData) => {

    const id = userData
    const response = await axios.put(API_URL + `${id}` + "/dismissNotifications")

    console.log(response)
    return response.data
   
  
}

// -------------------------------------------------

const updateUser = async (userData) => {
  const response = await axios.put(API_URL + userData._id, userData)

  return response.data
}



const userService = {
  getUser,
  dismissNotifications,

  updateUser,
  
}

export default userService