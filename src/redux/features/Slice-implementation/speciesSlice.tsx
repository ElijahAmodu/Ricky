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
    speciesVisibility: state => {
      state.isDivVisible = !state.isDivVisible;
    },
    speciesNavWidth: (state, action: PayloadAction<number>) => {
      state.divHeight = action.payload;
    }
  }
});

export default filterSlice.reducer;
export const { speciesVisibility, speciesNavWidth } = filterSlice.actions;


