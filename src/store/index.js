import { configureStore } from "@reduxjs/toolkit";

//slices
import slice from "./slice";
import slider from "./slider";

const store = configureStore({
  reducer: {
    slice: slice,
    slider: slider,
  },
});

export default store;
