import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchUser = createAsyncThunk(
  "userLogin/fetchUser",
  async ({ loginEmail, loginPassword }) => {
    
    console.log(loginEmail, loginPassword);

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
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed";
      state.isAuthenticate = "false";
    },

  },


})

export default loginUserSlice.reducer;