import { createSlice } from "@reduxjs/toolkit";

const authorized = localStorage.getItem("token") ? true : false;

const initialState = {
  value: authorized,
};

export const isAuthSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.value = true;
    },
    signOut: (state) => {
      state.value = false;
    },
  },
});

export const { signIn, signOut } = isAuthSlice.actions;

export default isAuthSlice.reducer;
