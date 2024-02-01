import { createSlice } from "@reduxjs/toolkit";

export interface appState {
  isMenu: boolean;
}

const initialState: appState = {
  isMenu: false,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenu = !state.isMenu;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
