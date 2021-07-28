import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateDrink } from "../services/editBeverage";


export const updateBeverage = createAsyncThunk(
  "editBeverage/updateBeverage",
  async ({ beverageName, imageUrl, category, alcoholContent, beverageIngredient, instruction, beverageId }) => {
    
    // console.log(beverageName, imageUrl, category, alcoholContent, beverageIngredient, instruction);
       console.log(beverageId);

    const data = updateDrink({ beverageName, imageUrl, category, alcoholContent, beverageIngredient, instruction, beverageId })
    
    console.log(data)

    // return data;
  }
);


const editRecipeSlice = createSlice({
  name: "editBeverage",
  initialState: {
    status: null,
    editDrink: null,
  },


  extraReducers: {
    [updateBeverage.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateBeverage.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.editDrink = payload;
    },
    [updateBeverage.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default editRecipeSlice.reducer;