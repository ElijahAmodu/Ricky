import { configureStore } from "@reduxjs/toolkit"
import visibilityReducer  from "../features/Slice-implementation/navSlice";
import statusReducer from "../features/Slice-implementation/statusSlice";
import speciesReducer from "../features/Slice-implementation/speciesSlice";
import genderReducer from "../features/Slice-implementation/genderSlice";
import characterSlice from "../features/Slice-implementation/characterSLice";
import EpisodeSlice from "../features/Slice-implementation/EpisodeSlice";

const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
    statusFilter: statusReducer,
    speciesFilter: speciesReducer,
    genderFilter: genderReducer,
    characterData: characterSlice.reducer,
    EpisodeData: EpisodeSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;



