import { configureStore } from "@reduxjs/toolkit"
import navSlice  from "../features/Slice-implementation/navSlice";

const store = configureStore({
  reducer: {
    nav: navSlice
  }
})

export default store;

