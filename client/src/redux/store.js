import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./signInUserSlice";
import loadUserReducer from "./loadUserSlice";



export default configureStore({
  reducer: {
    user: userReducer,
    loadedUser: loadUserReducer,
    // registeredUser: registerUserReducer
  },
});