import React from "react";

function ToDoList(props) {
  return (
    <div key={props.key}>
      <h2>{props.todo}</h2>
      <button onClick={() => props.deletingTodos(props.bek)}>
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
}

export default ToDoList;
