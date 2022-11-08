import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticationState = {
  isLoggedIn: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthenticationState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export default authenticationSlice;
