import React from "react";
import "./styles.css";

import Paper from "./components/Paper";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

export default function App() {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todo />
    </Paper>
  );
}
