import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "./dataProvider";

import List from "./list";
import Footer from "./footer";
import "../form.css";
import icono from "../images/icon-sun.svg";

function Form() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    if (todoName !== "") {
      setTodos([...todos, { name: todoName, complete: false }]);
      setTodoName("");
      todoInput.current.focus();
    } else {
      alert("Add a to do");
    }
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <div className="todo-container">
      <div className="todo">
        <div className="todo-header">
          <h2> TODO</h2>
          <img src={icono} />
        </div>
        <form className="todo-create" autoComplete="off" onSubmit={addTodo}>
          <input
            type="text"
            name="todos"
            id="todos"
            ref={todoInput}
            value={todoName}
            placeholder="Create a new todo..."
            onChange={(e) => setTodoName(e.target.value.toLowerCase())}
          />
        </form>

        <List />
      </div>
    </div>
  );
}

export default Form;
