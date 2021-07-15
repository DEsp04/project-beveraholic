import { createAsyncThunk } from "@reduxjs/toolkit";
import { userRegister } from "../services/registerUser";



export const fetchRegisterUser = createAsyncThunk(
  "userRegister/fetchRegisterUser",
  async ({ userName, loginEmail, loginPassword }) => {
    
    console.log(userName, loginEmail, loginPassword);
    
    // const data = userRegister({ userName, loginEmail, loginPassword })
    
    // console.log(data)

    // return data;
  }
);



const registerUserSlice = createSlice({
  name: "userRegister",
  initialState: {
    isAuthenticate: null,
    status: null,
    user: null,
  },


  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.user = payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default registerUserSlice.reducer;