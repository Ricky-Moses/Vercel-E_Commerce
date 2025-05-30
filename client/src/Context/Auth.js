import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAxios from '../API/authAxios.js'


// Register User
export const RegisterUser = createAsyncThunk(
  'auth/RegisterUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authAxios.post('/register', userData);
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
      const response = await authAxios.post('/login', userData);
      console.log('Login response:', response.data);
      return response.data;
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      return rejectWithValue(err.response?.data?.msg || 'Login failed');
    }
  }
);

// Logout User
export const LogoutUser = createAsyncThunk(
  'auth/LogoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAxios.get('/logout', { withCredentials: true });
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
        state.user = action.payload.user;
        state.loading = false;
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
        state.user = action.payload.user;
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
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