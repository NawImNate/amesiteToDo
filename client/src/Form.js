import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <input
          className="input-todo"
          type="text"
          placeholder="Create a task"
          onChange="{}"
        />
        <button className="submit-todo" type="submit" onClick="{}">
          +
        </button>
      </form>
    </div>
  );
};

export default Form;
