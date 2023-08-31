import { createSlice } from "@reduxjs/toolkit";

const slider = createSlice({
  name: "slider",
  initialState: {
    offset: 0,
  },
  reducers: {
    BACK_OFFSET(state) {
      state.offset = state.offset + 400;
      if (state.offset > 0) {
        state.offset = -2000;
      }
    },
    NEXT_OFFSET(state) {
      state.offset = state.offset - 400;
      if (state.offset < -2000) {
        state.offset = 0;
      }
    },
  },
});

export const { BACK_OFFSET, NEXT_OFFSET } = slider.actions;
export default slider.reducer;
