import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0
}

export const navSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    INCREMENT: state => {
      state.value +1
    },
    DECREMENT: state => {
      state.value -=1
    }
  }
})

export default navSlice.reducer;
export const { INCREMENT, DECREMENT } = navSlice.actions;
