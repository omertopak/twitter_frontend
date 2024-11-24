import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import tweetReducer from "../features/tweetSlice";
import profileReducer from "../features/profileSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; 


const authPersistConfig = {
  key: "auth",
  storage,
};


const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);


export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, 
    tweet: tweetReducer, 
    profile: profileReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Persistor for redux-persist
export const persistor = persistStore(store);

export default store;
