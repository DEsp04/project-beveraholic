import { createSlice } from '@reduxjs/toolkit';



export const searchTermSlice = createSlice({

  name: 'word',
  initialState: {
    count: ""
  },
  reducers: {
    incrementWord: (state, action) => {
      state.count = action.payload
    }
  }
});


export const { incrementWord } = searchTermSlice.actions;

//to export the Reducers 
export default searchTermSlice.reducer;