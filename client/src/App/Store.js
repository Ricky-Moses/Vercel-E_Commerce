import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Context/Auth';
import adReducer from '../Context/Ad';

const store = configureStore({
  reducer: {
    auth: authReducer,
    ads: adReducer
  },
});

export default store;