import React, { useState } from "react";
import "./styles.css";
import Todolist from "./Todolist";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newtodos = [...todos, task];
    setTodos(newtodos);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>SV To-do's</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="task"
          style={{ width: "200px", height: "30px" }}
          placeholder="Enter your To-do"
          value={task}
          onChange={changeHandler}
        />{" "}
        &nbsp;&nbsp;
        <input type="submit" name="add" value="Add" id="adbtn" />
      </form>
      <Todolist todolist={todos} deleteHandler={deleteHandler} />
    </div>
  );
}
