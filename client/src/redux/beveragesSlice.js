import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBeverages } from "../services/fetchBeverages";


export const fetchDrinks = createAsyncThunk(
  "beverage/fetchDrinks",
  async () => {
    
    const data = getBeverages()
    console.log("beverages Slice:" + data )

    return data;
  }
);


const beveragesSlice = createSlice({
  name: "beverage",
  initialState: {
    status: null,
    beverages: null,
  },


  extraReducers: {
    [fetchDrinks.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchDrinks.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.beverages = payload;
    },
    [fetchDrinks.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default beveragesSlice.reducer;