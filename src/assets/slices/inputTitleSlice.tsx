import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const inputTitleSlice = createSlice({
  name: "incompleteTodos",
  initialState: { value: "" },
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = "";
    },
  },
});

export const { change, reset } = inputTitleSlice.actions;
export default inputTitleSlice.reducer;
