import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

import AsyncStorage from '@react-native-async-storage/async-storage';


// Get user from localStorage
const userDetails = async () => {
    const user = await AsyncStorage.getItem('user');
    return JSON.parse(user)
}

const initialState = {
  userDetails: userDetails ? userDetails : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


//

// Get user
export const getUser = createAsyncThunk(
  'user/:id',
  async (user, thunkAPI) => {
    try {

      // console.log(user)
      
      return await userService.getUser(user)

    } catch (error) {

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
        
      console.log(message)

      return thunkAPI.rejectWithValue(message)
      
    }
  }
)

// Dismiss notifications

export const dismissNotifications = createAsyncThunk(
  'user/:id/dismissNotifications',
  async (user, thunkAPI) => {
    try {

      console.log(user)
      
      return await userService.dismissNotifications(user)

    } catch (error) {

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
      
    }
  }
)


// update user
export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkAPI) => {
  try {

    return await userService.updateUser(user)

  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})





//

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
   extraReducers: (builder) => {
    builder

    // get user
      .addCase(getUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userDetails = action.payload
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.userDetails = null
      })

    // dismiss notifications
    .addCase(dismissNotifications.pending, (state) => {
        state.isLoading = true
      })
      .addCase(dismissNotifications.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userDetails.notifications = []
        // console.log(action.payload)
      })
      .addCase(dismissNotifications.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.userDetails = null
      })

    //update user

      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userDetails = action.payload
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.userDetails = null
      })

      
      
   }
})

export const { reset } = userSlice.actions
export default userSlice.reducer