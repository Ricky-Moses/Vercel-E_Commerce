import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL with fallback
const API = import.meta.env.VITE_API_URL_AUTH || 'http://localhost:3000/api/auth';
// console.log('Auth API URL:', API);

// Configure Axios
axios.defaults.withCredentials = true;
axios.defaults.baseURL = API;

// Register User
export const RegisterUser = createAsyncThunk(
  'auth/RegisterUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/register', userData);
      return response.data;
    } catch (err) {
      console.error('Register error:', err.response?.data || err.message);
      return rejectWithValue(err.response?.data?.msg || 'Registration failed');
    }
  }
);

// Login User
export const LoginUser = createAsyncThunk(
  'auth/LoginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/login', userData);
      console.log('Login response:', response.data);
      return response.data;
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      return rejectWithValue(err.response?.data?.msg || 'Login failed');
    }
  }
);

// Current User with Retry
export const CurrentUser = createAsyncThunk(
  'auth/CurrentUser',
  async (_, { rejectWithValue }) => {
    const maxRetries = 2;
    let attempt = 0;

    while (attempt <= maxRetries) {
      try {
        const response = await axios.get('/me', { withCredentials: true });
        console.log('Current user response:', response.data);
        return response.data;
      } catch (err) {
        attempt++;
        console.error(`Current user error (attempt ${attempt}):`, err.response?.data || err.message);
        if (attempt > maxRetries) {
          return rejectWithValue(err.response?.data?.msg || 'Failed to fetch current user');
        }
        // Wait before retrying
        await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
      }
    }
  }
);

// Logout User
export const LogoutUser = createAsyncThunk(
  'auth/LogoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/logout', { withCredentials: true });
      return response.data;
    } catch (err) {
      console.error('Logout error:', err.response?.data || err.message);
      return rejectWithValue(err.response?.data?.msg || 'Logout failed');
    }
  }
);

// Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    resetAuth: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(RegisterUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Current User
      .addCase(CurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(CurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      // Logout
      .addCase(LogoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LogoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(LogoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions
export const { resetAuth } = authSlice.actions;

// Export reducer
export default authSlice.reducer;