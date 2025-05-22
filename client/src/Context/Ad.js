// advertisementSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import adsAxios from '../API/adsAxios';

export const fetchAdvertisement = createAsyncThunk(
  'ads/fetchAdvertisement',
  async (_, { rejectWithValue }) => {
    try {
      const response = await adsAxios.get('/advertisement');
      // console.log('API Response:', response.data);
      return response.data; // Should be the array
    } catch (err) {
      console.error('Fetch Advertisement error:', err.response?.data || err.message);
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch advertisements');
    }
  }
);

const advertisementSlice = createSlice({
  name: 'ads',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertisement.pending, (state) => {
        state.loading = true;
        state.error = null;
        // console.log('Pending State:', state);
      })
      .addCase(fetchAdvertisement.fulfilled, (state, action) => {
        // console.log('Fulfilled Payload:', action.payload);
        state.data = action.payload;
        state.loading = false;
        // console.log('Fulfilled State:', state);
      })
      .addCase(fetchAdvertisement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // console.log('Rejected Error:', action.payload);
      });
  },
});

export default advertisementSlice.reducer;