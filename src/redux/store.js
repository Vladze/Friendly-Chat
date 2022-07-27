import { configureStore } from "@reduxjs/toolkit";
import isAuth from "./slices/authSlice";

export const store = configureStore({
  reducer: { isAuth },
});
