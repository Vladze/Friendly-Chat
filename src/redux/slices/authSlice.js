import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const authorized = localStorage.getItem("token") ? true : false;

const initialState = {
  value: authorized,
};

export const isAuthSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.value = true;
    },
    signOut: (state, action) => {
      state.value = false;
    },
  },
});

export const { signIn, signOut } = isAuthSlice.actions;

export default isAuthSlice.reducer;
