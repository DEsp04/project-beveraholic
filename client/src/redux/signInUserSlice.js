import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchUser = createAsyncThunk(
  "userLogin/fetchUser",
  async () => {
    
    

  }
);




const loginUserSlice = create({
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
    [fetchUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = payload;
      isAuthenticate = "true";
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed";
      isAuthenticate = "false";
    },

  },


})

export default loginUserSlice.reducer;