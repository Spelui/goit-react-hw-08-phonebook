import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchCurent: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.loginIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.loginOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurentUser.pending, (state) => {
        state.isFetchCurent = true;
      })
      .addCase(authOperations.fetchCurentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchCurent = false;
      })
      .addCase(authOperations.fetchCurentUser.rejected, (state) => {
        state.isFetchCurent = false;
      });
  },
});

export default authSlice.reducer;
