import React, { useState } from "react";
// import "./styles.css";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning  React!", isCompleted: false },
    { text: "Learning React  Hooks!", isCompleted: false },
    { text: "Learning styling in react!", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("only 10 todos");
    }
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  //CLEAR TODOS
  const clearTodos = () => !showAdd && setTodos([]);

  // console.log("todos", todos);
  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        clearTodos={clearTodos}
        showAdd={showAdd}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
