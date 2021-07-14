import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./signInUserSlice";
import loadUser from "./loadUserSlice";



export default configureStore({
  reducer: {
    user: userReducer,
    loadedUser: loadUser
  },
});