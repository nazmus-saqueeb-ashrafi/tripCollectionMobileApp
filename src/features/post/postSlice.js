import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postService from './postService'

import AsyncStorage from '@react-native-async-storage/async-storage';

// Get user from localStorage
const user = async () => {
    const user = await AsyncStorage.getItem('user');
    return JSON.parse(user)
}

const timelinePosts = []

const comments = []
const likes = []
// const post = null

const initialState = {
  user: user ? user : null,
  timelinePosts: timelinePosts ? timelinePosts : null,
  // post: post ? post : null,
  // comments: comments ? comments : null,
  // likes: likes ? likes : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get any user's timeline posts
// updated
export const getTimeLinePosts = createAsyncThunk(
    'post/timelinePosts',
    async ( userId , thunkAPI) => {

      try {

      const user = thunkAPI.getState().auth.user 

      return await postService.getTimelinePosts(userId) 

      
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


// Create post
// updated
export const createPost = createAsyncThunk(
    'post/createPost',
    async (postData, thunkAPI) => {

      try {
      
      const token = thunkAPI.getState().auth.user.token

      return await postService.createPost(postData,token)

      
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

// Update post
export const updatePost = createAsyncThunk(
    'post/updatePost',
    async ({postId, post}, thunkAPI) => {

      try {
      
      const token = thunkAPI.getState().auth.user.token
      
      console.log(postId)
      console.log(post)
      

      return await postService.updatePost(postId, post, token)

      
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


// Delete post
export const deletePost = createAsyncThunk(
    'post/deletePost',
    async (postId, thunkAPI) => {

      try {
      
      const token = thunkAPI.getState().auth.user.token
      
      console.log(postId)
    
      return await postService.deletePost(postId, token)

      
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


// Create comment
// updated
export const createComment = createAsyncThunk(
    'post/createComment',
    async (commentData, thunkAPI) => {

      try {
      
      const token = thunkAPI.getState().auth.user.token

      // console.log(text)
      // console.log(postId)
      console.log(commentData)

      return await postService.createComment(commentData, commentData.postId ,token)

      
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

// Get comments for post
export const getCommentsForPost = createAsyncThunk(
    'post/getCommentsForPost',
    async ( postId , thunkAPI) => {

      try {
      
      const token = thunkAPI.getState().auth.user.token

      return await postService.getCommentsForPost(postId ,token)

      
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

// Delete comment
// updated
export const deleteComment = createAsyncThunk(
    'post/deleteComment',
    async (commentData, thunkAPI) => {


    try {
      
      const token = thunkAPI.getState().auth.user.token
      
      console.log(commentData.commentId)
    
      return await postService.deleteComment(commentData, token)

      
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


// Like/Unlike
// updated
export const likePost = createAsyncThunk(
    'post/likePost',
    async (postData, thunkAPI) => {

      try {

      return await postService.likePost(postData)

      
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




export const postSlice = createSlice({
  name: 'post',
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

      // getTimeLinePosts
      .addCase(getTimeLinePosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTimeLinePosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
    
        state.timelinePosts = action.payload
        
        
      })
      .addCase(getTimeLinePosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.timelinePosts = null
      })

      // createPost
      .addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        
        // state.timelinePosts = state.timelinePosts.reverse()
        // state.timelinePosts.push(action.payload)

        state.timelinePosts = [action.payload, ...state.timelinePosts] 
        
        
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      // updatePost
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true

        console.log(action.payload)
        
        // state.timelinePosts.reduce(timelinePosts.filter(action.payload._id))
        state.timelinePosts.push(action.payload)
        
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        
        state.timelinePosts = null
      })

      // deletePost
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        console.log(action.payload)
        state.timelinePosts.push(action.payload)
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.timelinePosts = null
      })

      // createComment
      .addCase(createComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        console.log(action.payload)
        
        const index = state.timelinePosts.findIndex(post => post._id === action.payload.postId)
        state.timelinePosts[index].comments.push(action.payload)
        
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload

        state.timelinePosts = null

      })

      // getCommentsForPost
      .addCase(getCommentsForPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCommentsForPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
    
        state.comments = [...state.comments, ...action.payload]
        // console.log(state.comments)
      })
      .addCase(getCommentsForPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload

        // state.comments = null
      })

      // deleteComment
      .addCase(deleteComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        // console.log(action.payload)
        // state.timelinePosts.push(action.payload) 
        const index = state.timelinePosts.findIndex(post => post._id === action.payload.postId)
        const commentIndex = state.timelinePosts[index].comments.findIndex(comment => comment._id === action.payload._id)
        state.timelinePosts[index].comments.splice(commentIndex, 1)
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.timelinePosts = null
      })

      // likePost
      .addCase(likePost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true 

        if(action.payload.likes.includes(user.user._id)){
          var index = state.timelinePosts.map(item => item._id).indexOf(action.payload._id);

          state.timelinePosts[index].likes.splice(
          state.timelinePosts[index].likes.findIndex(
            (user) => user === action.payload._id
          ),
          1
        );

        }else{

          var index = state.timelinePosts.map(item => item._id).indexOf(action.payload._id);
          state.timelinePosts[index].likes.push(user.user._id)
        }
        
        // state.refreshNotification
        
       
      })
      .addCase(likePost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

   }
})

export const { reset } = postSlice.actions
export default postSlice.reducer