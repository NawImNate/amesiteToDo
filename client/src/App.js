import React, { useState } from "react";
import "./App.css";
//Components
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        <Form />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
