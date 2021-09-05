import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import launchesReducer from "../features/launches/launchSlice";

export const store = configureStore({
  reducer: {
    launches: launchesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
