import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userRegister } from "../services/registerUser";



export const fetchRegisterUser = createAsyncThunk(
  "userRegister/fetchRegisterUser",
  async ({ registerUsername, registerEmail, registerPassword }) => {
    
    console.log(registerUsername, registerEmail, registerPassword);
    
    // const data = userRegister({ userName, loginEmail, loginPassword })
    
    // console.log(data)

    // return data;
  }
);



const registerUserSlice = createSlice({
  name: "userRegister",
  initialState: {
    status: null,
    user: null,
  },


  extraReducers: {
    [fetchRegisterUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchRegisterUser.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.user = payload;
    },
    [fetchRegisterUser.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default registerUserSlice.reducer;