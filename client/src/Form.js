import React, { useState } from "react";

const Form = ({}) => {
  const [TodoItem, setTodoItem] = useState(null);
  function submitTodo() {
    console.log(TodoItem);
  }

  return (
    <div>
      {TodoItem != null && <div>{TodoItem.description}</div>}
      <form className="todo-container">
        <div className="todo-container-card">
          <p>Title</p>
          <input
            className="input-todo-title"
            type="text"
            placeholder="Create a task"
            onChange={(e) =>
              setTodoItem({
                ...TodoItem,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="todo-container-card">
          <p>Description</p>
          <input
            className="input-todo-description"
            type="text"
            placeholder="Create a description"
            onChange={(e) =>
              setTodoItem({
                ...TodoItem,
                description: e.target.value,
              })
            }
          />
        </div>
        <div className="todo-container-card">
          <p>Due Date</p>
          <input
            className="input-todo-duedate"
            type="date"
            onChange={(e) =>
              setTodoItem({
                ...TodoItem,
                dueDate: e.target.value,
              })
            }
          />
        </div>
        <div className="todo-container-card2">
          <button
            className="submit-todo"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              submitTodo();
            }}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
