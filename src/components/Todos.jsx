import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "belajar react"
    },
    {
      text: "belajar props react"
    },
    {
      text: "belajar react hooks"
    },
    {
      text: "belajar component direact"
    },
    {
      text: "belajar react jsx"
    },
    {
      text: "belajar react"
    },
    {
      text: "belajar props direact"
    },
    {
      text: "belajar react hooks"
    },
    {
      text: "belajar component"
    },
    {
      text: "belajar react jsx"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
