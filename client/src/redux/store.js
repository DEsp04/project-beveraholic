import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./signInUserSlice";
import loadUserReducer from "./loadUserSlice";
import registerUserReducer from "./registerUserSlice";
import getBeveragesReducer from "./beveragesSlice";
import newBeverageReducer from "./addNewBeverageSlice";


export default configureStore({
  reducer: {
    user: userReducer,
    loadedUser: loadUserReducer,
    registeredUser: registerUserReducer,
    getBeverages: getBeveragesReducer,
    newBeverage: newBeverageReducer,
  },
});