import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadedUser } from "../services/loadUser";




export const fetchLoadUser = createAsyncThunk(
  "loadUser/fetchLoadUser",
  async () => {
    
    
    const data = loadedUser( )

    return data;
  }
);




const loadUserSlice = createSlice({
  name: "loadUser",
  initialState: {
    isAuthenticate: null,
    status: null,
    user: null,
  },


  extraReducers: {
    [fetchLoadUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchLoadUser.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.user = payload;
      state.isAuthenticate = "true";
    },
    [fetchLoadUser.rejected]: (state, action) => {
      state.status = "failed";
      state.isAuthenticate = "false";
    },

  },


})

export default loadUserSlice.reducer;