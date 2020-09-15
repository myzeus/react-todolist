import React, { useState, useEffect } from "react";
// import "./styles.css";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoform/TodoFormClass";
import Todos from "../components/todos/TodosClass";
import Container from "../layout/Container";

const TodoList = () => {
  // const [todos, setTodos] = useState([
  //   { text: "Learning  React!", isCompleted: false },
  //   { text: "Learning React  Hooks!", isCompleted: false },
  //   { text: "Learning styling in react!", isCompleted: false }
  // ]);

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          clearTodos={clearTodos}
          showAdd={showAdd}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
