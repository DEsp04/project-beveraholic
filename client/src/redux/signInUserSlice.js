import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInUser } from "../services/signInUser";



export const fetchUser = createAsyncThunk(
  "userLogin/fetchUser",
  async ({ loginEmail, loginPassword }) => {
    
    console.log(loginEmail, loginPassword);
    const data = logInUser({ loginEmail, loginPassword })
    
    // console.log(data)

    return data;
  }
);




const loginUserSlice = createSlice({
  name: "userLogin",
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
      state.isAuthenticate = "true";
      localStorage.setItem("userToken", payload.token)
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed";
      state.isAuthenticate = "false";
    },

  },


})

export default loginUserSlice.reducer;