import { React, useEffect, useState } from "react";

const TodoList = ({ ToDoList }) => {
  // async function deleteTodo(postID){}

  return (
    <div className="todoList-container">
      <ul className="todo-list">
        {ToDoList.length > 0 && (
          <div>
            {ToDoList.map((post) => (
              <div>
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
