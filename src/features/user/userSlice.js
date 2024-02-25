import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  sunset: "sunset",
  autumn: "autumn",
};

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("comfy-store-user")) || null;
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("comfy-store-theme") || themes.sunset;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("comfy-store-user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("comfy-store-user");
      toast.success("You've logged out successfully");
    },
    toggleTheme: (state) => {
      const { sunset, autumn } = themes;
      state.theme = state.theme === sunset ? autumn : sunset;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("comfy-store-theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
