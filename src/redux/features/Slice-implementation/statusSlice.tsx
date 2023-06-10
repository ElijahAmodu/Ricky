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
  name: "statusFilter",
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

export default filterSlice.reducer;
export const { toggleDivVisibility, reduceNavWidth } = filterSlice.actions;


