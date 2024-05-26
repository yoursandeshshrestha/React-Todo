import React, { useEffect } from "react";
import { useState } from "react";
import Todoitem from "./Todoitem";

function Todo() {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("Tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  function onChange(e) {
    setTodo(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
    if (todo == "") {
      console.log("stupid");
    } else {
      setTask([...task, todo]);
    }
    setTodo("");
  }

  useEffect(() => {
    console.log(task);
  }, [task]);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem("Tasks"));
    if (storedTask) {
      setTask(storedTask);
    }
  }, []);

  function DeleteItem(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <>
      <div className="Form">
        <form onSubmit={submitForm}>
          <input
            type="text"
            value={todo}
            onChange={onChange}
            placeholder="Enter a task.."
          />
          <button className="Form-Input-Button">Add</button>
        </form>
        <Todoitem task={task} DeleteItem={DeleteItem} />
      </div>
    </>
  );
}

export default Todo;
