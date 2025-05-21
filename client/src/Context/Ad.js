import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL with fallback
const API = import.meta.env.VITE_API_URL_ADS || 'http://localhost:3000/api/ads';
// console.log('ADS API URL:', API);

// Configure Axios
axios.defaults.withCredentials = true;
axios.defaults.baseURL = API;

// Advertisememt
export const fetchAdvertisement = createAsyncThunk(
  'ads/fetchAdvertisement',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/advertisement', { withCredentials: true });
      return response.data;
    } catch (err) {
      console.error('Fetch Advertisement error:', err.response?.data || err.message);
      return rejectWithValue(err.response?.data?.msg || 'Failed to fetch advertisements');
    }
  }
);

const advertisementSlice = createSlice({
    name: 'ads',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAdvertisement.pending, (state) => {
          state.loading = true
        })
        .addCase(fetchAdvertisement.fulfilled, (state, action) => {
          state.data = action.payload
          state.loading = false
        })
        .addCase(fetchAdvertisement.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload
        })
    }
})

export default advertisementSlice.reducer