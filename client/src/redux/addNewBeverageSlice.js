import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInUser } from "../services/signInUser";



export const createNewBeverage = createAsyncThunk(
  "newBeverage/createNewBeverage",
  async ({ beverageName, imageUrl, category, alcoholContent, beverageIngredient, instruction }) => {
    
    console.log(beverageName, imageUrl, category, alcoholContent, beverageIngredient, instruction);

    // const data = logInUser({ loginEmail, loginPassword })
    
    // console.log(data)

    return data;
  }
);


const newBeverageSlice = createSlice({
  name: "newBeverage",
  initialState: {
    status: null,
    newDrink: null,
  },


  extraReducers: {
    [createNewBeverage.pending]: (state, action) => {
      state.status = "loading";
    },
    [createNewBeverage.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.newDrink = payload;
    },
    [createNewBeverage.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default newBeverageSlice.reducer;