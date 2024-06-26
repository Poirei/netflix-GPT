import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearchView: false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearchView = !state.showGPTSearchView;
    },
  },
});

export const { toggleGPTSearchView } = gptSlice.actions;

export default gptSlice.reducer;
