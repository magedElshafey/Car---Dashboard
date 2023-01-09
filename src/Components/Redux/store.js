import { configureStore } from "@reduxjs/toolkit";
import SwitchMode from "./SwitchModeSlice";
const store = configureStore({
  reducer: {
    SwitchMode,
  },
});
export default store ; 