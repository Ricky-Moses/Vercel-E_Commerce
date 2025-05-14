import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// API
const API = import.meta.env.VITE_API_URL_AUTH

// console.log(API);
// Cookies
axios.defaults.withCredentials = true;

// Register
export const RegisterUser = createAsyncThunk('auth/registerUser', async(userData, thunkAPI) => {
    try{
        const res = await axios.post(`${API}/register`, userData)
        return res.data
    }
    catch(err){
        console.error('Register error:', err.response?.data || err.message)
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message)
    }
})
// Login
export const LoginUser = createAsyncThunk('auth/loginUser', async(userData, thunkAPI) => {
    try{
        const res = await axios.post(`${API}/login`, userData)
        return res.data
    }
    catch(err){
        console.error('Login error:', err.response?.data || err.message)
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message)
    }
})
// Current User
export const CurrentUser = createAsyncThunk('auth/currentUser', async(_, thunkAPI) =>{
    try{
        const res = await axios.get(`${API}/me`, {withCredentials: true})
        return res.data
    }
    catch(err){
        console.error('Current user error:', err.response?.data || err.message)
        return thunkAPI.rejectWithValue(err.response?.data?.message || err.message)
    }
})
// Logout
export const LogoutUser = createAsyncThunk('auth/logoutUser', async() => {
    const res = await axios.get(`${API}/logout`)
    return res.data
})

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Register
            .addCase(RegisterUser.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(RegisterUser.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.isAuthenticated = true
                state.loading = false
            })
            .addCase(RegisterUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || action.error.message
            })
            // Login
            .addCase(LoginUser.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                console.log('Login payload:', action.payload);
                state.user = action.payload.user
                state.isAuthenticated = true
                state.loading = false
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || action.error.message
            })
            // Current user
            .addCase(CurrentUser.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(CurrentUser.fulfilled, (state, action) => {
                console.log('Current user payload:', action.payload);
                state.user = action.payload.user
                state.isAuthenticated = true
                state.loading = false
            })
            .addCase(CurrentUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || action.error.message
            })
            // Logout
            .addCase(LogoutUser.fulfilled, state => {
                state.user = null
                state.isAuthenticated = false
                state.loading = false
            })
    }
})

export default authSlice.reducer