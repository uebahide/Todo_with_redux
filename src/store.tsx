import { configureStore } from '@reduxjs/toolkit';
import incompleteTodosSlicer from './assets/slices/incompleteTodosSlice';

export const store = configureStore({
  reducer: {
    incompleteTodos: incompleteTodosSlicer,
  },
});
