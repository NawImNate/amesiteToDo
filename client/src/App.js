import React, { useState } from "react";
import "./App.css";
//Components
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [Authenticated, setAuthenticated] = useState(false);
  const [login, setLogin] = useState(null);
  const [userID, setuserID] = useState(null);
  const [todoList, setTodoList] = useState([]);

  // check if user exists, create if user doesn't exist
  const checkUser = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login }),
      };
      const response = await fetch(
        "http://localhost:5000/users",
        requestOptions
      );

      const data = await response.json();

      if (data.userID !== null) {
        setuserID(data.userID);
      }
      setAuthenticated(data.authenticated);
    } catch (err) {
      console.log(err.message);
    }
  };

  async function triggerReload(testVariable) {
    console.log("CLICKED MAH BOy RELOAD THEM TODOS");
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `http://localhost:5000/todos/${userID}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    if (data != null) {
      setTodoList(data);
    }
  }

  console.log(login);
  return (
    <div className="App">
      {Authenticated ? (
        <div>
          <h1>Todo List</h1>
          <Form userID={userID} triggerReload={triggerReload} />
          <TodoList ToDoList={todoList} />
        </div>
      ) : (
        <div>
          <div>
            <input
              placeholder="Enter Email"
              type="text"
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
          </div>
          <div>
            <input
              placeholder="Enter Password"
              type="text"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
          </div>
        </div>
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          checkUser();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
