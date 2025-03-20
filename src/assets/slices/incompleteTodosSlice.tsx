import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: string[] } = {
  value: [],
};

const incompleteTodosSlice = createSlice({
  name: 'incompleteTodos',
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

export const { add, remove } = incompleteTodosSlice.actions;
export default incompleteTodosSlice.reducer;
