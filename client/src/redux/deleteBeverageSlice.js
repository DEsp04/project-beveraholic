import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteDrink } from "../services/deleteBeverage";


export const deleteBeverage = createAsyncThunk(
  "deleteItem/ deleteBeverage",
  async ({ id }) => {
    
    console.log(id);

    const data = deleteDrink({ id })
    
    console.log(data)

    // return data;
  }
);


const deleteSlice = createSlice({
  name: "deleteItem",
  initialState: {
    status: null,
    deletedDrink: null,
  },


  extraReducers: {
    [deleteBeverage.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteBeverage.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.deletedDrink = payload;
    },
    [deleteBeverage.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default  deleteSlice.reducer;