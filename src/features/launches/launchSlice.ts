import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { ILaunchInfo } from "./LaunchApi.interface";
import { getLaunchDataToJSON } from "./api/LaunchApi";

export interface LaunchState {
  launchInfo: ILaunchInfo[] | null;
  status: "done" | "loading" | "failed";
}

export const initialState: LaunchState = {
  launchInfo: null,
  status: "loading",
};

export const getLaunchDataAsync = createAsyncThunk(
  "launches/launchData",
  async () => {
    const response = await getLaunchDataToJSON();
    return response;
  }
);

export const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLaunchDataAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getLaunchDataAsync.fulfilled, (state, action) => {
      state.status = "done";
      state.launchInfo = action.payload;
    });
    builder.addCase(getLaunchDataAsync.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default launchesSlice.reducer;

export const selectLaunchList = (state: RootState) => state.launches;
