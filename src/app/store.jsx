import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import tweetReducer from "../features/dataSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tweet: tweetReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //? eger gelistirme asamasi prodcution ise o zaman yukaridaki ifade false dondurur ve dolayisiyla devTool kullanima kapali olur.
})
export default store