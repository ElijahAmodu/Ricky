import { PayloadAction, createSlice, } from "@reduxjs/toolkit";

interface VisibilityState {
  isDivVisible: boolean;
  divHeight: number;
}

const initialState: VisibilityState = {
  isDivVisible: false,
  divHeight: 16
}

export const navSlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    toggleDivVisibility: state => {
      state.isDivVisible = !state.isDivVisible;
    },
    reduceNavWidth: (state, action: PayloadAction<number>) => {
      state.divHeight = action.payload;
    }
  }
});

export default navSlice.reducer;
export const { toggleDivVisibility, reduceNavWidth } = navSlice.actions;

