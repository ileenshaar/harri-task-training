import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  let [taskInput, setTaskInput] = useState();
  let [tasksArray, setTasksArray] = useState([]);

  var addTask = () => {
    if (taskInput.trim() === "") return; //remove white spaces form beggining & end //if i clicked even if i didn't write anything then return
    setTasksArray([...tasksArray, taskInput]);
    setTaskInput(""); // when we click add we return the input to empty again
  };

  return (
    <div className="toDoContainer">
      <h2>To Do List</h2>
      <div className="inputButton">
        <input
          type="text"
          id="taskInput"
          placeholder="Write a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // e:object that represents event (input change) e.target:input itself
        />
        <button onClick={addTask}>add</button>
      </div>
      <ul>
        {tasksArray.map((task, index) => {
          return <li key={index}>{task}</li>; //key is important let react know which element has changed and which not
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
