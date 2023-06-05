import { configureStore } from "@reduxjs/toolkit"
import visibilityReducer  from "../features/Slice-implementation/navSlice";

const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;



