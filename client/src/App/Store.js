import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../Context/Auth'; // Updated import path

// Persistence configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Persist only auth slice
};

// Wrap auth reducer with persistence
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Custom middleware for logging rejected actions
const errorLoggingMiddleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.error(`Action rejected: ${action.type}`, {
      error: action.payload,
      meta: action.meta,
    });
  }
  return next(action);
};

// Configure store
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PURGE'],
        ignoredPaths: ['register'], // Ignore non-serializable fields if any
      },
    }).concat(errorLoggingMiddleware),
  devTools: (import.meta.env && import.meta.env.MODE !== 'production') ? {
    name: 'E-Commerce App',
    maxAge: 50, // Retain last 50 actions
    trace: true, // Enable action stack traces
  } : false,
});

// Create persistor
const persistor = persistStore(store);

// Export store and persistor
export { store, persistor };

console.log('Store initialized:', store);
console.log('Persistor initialized:', persistor);