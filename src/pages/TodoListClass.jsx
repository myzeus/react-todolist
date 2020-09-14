import React from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoform/TodoFormClass";
import Todos from "../components/todos/TodosClass";
import Container from "../layout/Container";

class TodoList extends React.Component {
  state = {
    todos: [
      { text: "Learning  React!", isCompleted: false },
      { text: "Learning React  Hooks!", isCompleted: false },
      { text: "Learning styling in react!", isCompleted: false }
    ],
    showAdd: false
  };

  addTdodo = (value) => {
    const { todos } = this.state;
    if (todos.length < 10) {
      const addedTodo = [
        ...this.state.todos,
        { text: value, isCompleted: false }
      ];
      this.setState({
        todos: addedTodo
      });
    } else {
      alert("only can added 10 times");
    }
  };

  // addTodo = (value) => {
  //   const { todos } = this.state;

  //   if (todos.length < 10) {
  //     const addedTodo = [...todos, { text: value, isCompleted: false }];

  //     this.setState({
  //       todos: addedTodo
  //     });
  //   } else {
  //     alert("Only 10 todos is allowed!");
  //   }
  // };

  // clearTodos = () => {
  //   if (this.state.showAdd) {
  //     alert("Clear can be used after add todo has been closed");
  //     return;
  //   }

  //   this.state({
  //     todos: []
  //   });
  // };

  addTodo = (value) => {
    const { todos } = this.state;

    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      this.setState({
        todos: addedTodo
      });
    } else {
      alert("Only 10 todos is allowed!");
    }
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("Finish add todo before clear");
      return;
    }
    this.setState({
      todos: []
    });
  };

  showAddToggle = () => {
    this.setState((prevState) => ({ showAdd: !prevState.showAdd }));
  };

  render() {
    const { showAdd, todos } = this.state;
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Header
            showAddToggle={this.showAddToggle}
            clearTodos={this.clearTodos}
            showAdd={showAdd}
          />
          <TodoForm addTodo={this.addTodo} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
