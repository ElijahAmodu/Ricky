// implement the state created here  
import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

interface VisibilityState {
  isDivVisible: boolean;
  divHeight: number;
}

const initialState: VisibilityState = {
  isDivVisible: false,
  divHeight: 5
}

export const filterSlice = createSlice({
  name: "speciesFilter",
  initialState,
  reducers: {
    genderVisibility: state => {
      state.isDivVisible = !state.isDivVisible;
    },
    genderNavWidth: (state, action: PayloadAction<number>) => {
      state.divHeight = action.payload;
    }
  }
});

export default filterSlice.reducer;
export const { genderVisibility, genderNavWidth } = filterSlice.actions;


