import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";

const StyledTodoPlaceholderText = styled.div`
  font-family: "Roboto", sans-serif;
  color: #484848;
  font-weight: initial;
  font-size: 22px;
  text-align: center;
  padding: 16px;
`;

const StyledAddButtonPlaceholderText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-decoration: underline;
  font-size: 22px;
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo } = this.props;
    return (
      <section className="todos-component">
        <Container flexDirection="column" minHeight="500px">
          {todos.length > 0 &&
            todos.map((todo, index) => {
              return (
                <Todo
                  key={index}
                  text={todo.text}
                  isCompleted={todo.isCompleted}
                  completeTodo={completeTodo}
                  index={index}
                />
              );
            })}
          {todos.length === 0 && (
            <StyledTodoPlaceholderText>
              {[
                "Add todo by Clicking ",
                <StyledAddButtonPlaceholderText>
                  ,Add
                </StyledAddButtonPlaceholderText>,
                " button on the top of left corner"
              ]}
            </StyledTodoPlaceholderText>
          )}
        </Container>
      </section>
    );
  }

  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}

export default Todos;
