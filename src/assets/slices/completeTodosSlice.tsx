import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { value: string[] } = {
  value: [],
};

const completeTodosSlice = createSlice({
  name: "completeTodos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { add, remove } = completeTodosSlice.actions;
export default completeTodosSlice.reducer;
