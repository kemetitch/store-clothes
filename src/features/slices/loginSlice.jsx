import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
  name: "filteredproducts",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("user")) || {
      name: "",
      password: "",
      authuser: false,
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      state.user = userId;
      if (userId.name === "kareem" && userId.password === "2581463") {
        state.user.authuser = true;
        const saveState = JSON.stringify(userId);
        sessionStorage.setItem("user", saveState);
      } else {
        state.user.authuser = false;
      }
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        authuser: false,
      };
      sessionStorage.clear();
    },
  },
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
