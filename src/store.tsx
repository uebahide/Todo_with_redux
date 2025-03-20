import { configureStore } from "@reduxjs/toolkit";
import incompleteTodosSlicer from "./assets/slices/incompleteTodosSlice";
import inputTitleSlicer from "./assets/slices/inputTitleSlice";
import completeTodosSlicer from "./assets/slices/completeTodosSlice";

export const store = configureStore({
  reducer: {
    incompleteTodos: incompleteTodosSlicer,
    completeTodos: completeTodosSlicer,
    inputTitle: inputTitleSlicer,
  },
});
