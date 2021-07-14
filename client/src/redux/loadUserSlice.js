import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadedUser } from "../services/loadUser";
import setAuthToken from "../utilities/setAuthToken";




export const fetchLoadUser = createAsyncThunk(
  "loadUser/fetchLoadUser",
  async (token) => {
    
    if (token) {
      setAuthToken(token);
    }
    
    const data = loadedUser()
    console.log("loadUser Slice:" + data )

    return data;
  }
);




const loadUserSlice = createSlice({
  name: "loadUser",
  initialState: {
    isAuthenticate: null,
    status: null,
    loadedUser: null,
  },


  extraReducers: {
    [fetchLoadUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchLoadUser.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.loadedUser = payload;
      state.isAuthenticate = "true";
    },
    [fetchLoadUser.rejected]: (state, action) => {
      state.status = "failed";
      state.isAuthenticate = "false";
    },

  },


})

export default loadUserSlice.reducer;