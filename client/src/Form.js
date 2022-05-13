import React from "react";

const Form = () => {
  return (
    <div>
      <form className="todo-container">
        <div className="todo-container-card">
          <p>Title</p>
          <input
            className="input-todo-title"
            type="text"
            placeholder="Create a task"
            onChange="{}"
          />
        </div>
        <div className="todo-container-card">
          <p>Description</p>
          <input
            className="input-todo-description"
            type="text"
            placeholder="Create a description"
            onChange="{}"
          />
        </div>
        <div className="todo-container-card">
          <p>Due Date</p>
          <input className="input-todo-duedate" type="date" />
        </div>
        <div className="todo-container-card2">
          <button className="submit-todo" type="submit" onClick="{}">
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
