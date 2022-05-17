import React, { useState } from "react";
import "./App.css";
//Components
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [Authenticated, setAuthenticated] = useState(false);
  const [login, setLogin] = useState(null);

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
      setAuthenticated(data.authenticated);

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(login);
  return (
    <div className="App">
      {Authenticated ? (
        <div>
          <h1>Todo List</h1>
          <Form />
          <TodoList />
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
