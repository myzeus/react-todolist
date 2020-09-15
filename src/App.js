import { ThemeProvider } from "emotion-theming";
import React from "react";
import "./styles.css";

import TodoList from "./pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  },
  background: {
    color: {
      primary: "#f2eecb"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}

// finish project
// https://codesandbox.io/s/react-todolist-589m6?file=/src/pages/TodoListClass.jsx
