import { useState } from "react";
import "./App.css";
import { IncompleteTodos } from "./assets/components/templates/IncompleteTodos";
import { InputTodo } from "./assets/components/molecules/InputTodo";
import { CompleteTodos } from "./assets/components/templates/CompleteTodos";

function App() {
  return (
    <>
      <InputTodo />
      <IncompleteTodos />
      <CompleteTodos />
    </>
  );
}

export default App;
