import { PayloadAction, createSlice, } from "@reduxjs/toolkit";
// import type { RootState } from '../../app/store'

interface VisibilityState {
  isDivVisible: boolean;
  divHeight: number;
}

const initialState: VisibilityState = {
  isDivVisible: true,
  divHeight: 52
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

// export const selector = (state: RootState) => state.visibility.isDivVisible

export default navSlice.reducer;
export const { toggleDivVisibility, reduceNavWidth } = navSlice.actions;

