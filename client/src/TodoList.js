import { React, useEffect, useState } from "react";

const TodoList = ({ ToDoList, triggerReload, passPropsForEdit }) => {
  async function deleteTodo(todo_id) {
    console.log(todo_id);
    try {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        `http://localhost:5000/status/${todo_id}`,
        requestOptions
      );
      console.log(response);
      const data = await response.json();
      if (data != null) {
        triggerReload();
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="todoList-container">
      <ul className="todo-list">
        {ToDoList.length > 0 && (
          <div>
            {ToDoList.map((post) => (
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    deleteTodo(post.todo_id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    passPropsForEdit(post);
                  }}
                >
                  Edit
                </button>
                <li key={post.id}>{post.description}</li>
                <span>{post.title}</span>
              </div>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
