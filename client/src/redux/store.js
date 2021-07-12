import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./signInUserSlice";



export default configureStore({
  reducer: {
    user: userReducer,
  },
});