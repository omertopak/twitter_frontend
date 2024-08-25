import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import tweetReducer from "../features/tweetSlice";
import profileReducer from "../features/profileSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Persist config for auth slice
const authPersistConfig = {
  key: "auth",
  storage,
};

// Wrap auth reducer with persistReducer
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Create the store with persisted auth reducer
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Persisted auth reducer
    tweet: tweetReducer, // Regular non-persisted tweet reducer
    profile: profileReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Persistor for redux-persist
export const persistor = persistStore(store);

export default store;
