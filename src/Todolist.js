import React from "react";

const Todolist = ({ todolist, deleteHandler }) => {
  return (
    <div>
      {todolist.map((todos, index) => (
        <div key={index}>
          <h3>
            {todos} &nbsp;{" "}
            <button onClick={() => deleteHandler(index)}> Delete </button>
          </h3>
        </div>
      ))}
    </div>
  );
};
export default Todolist;
