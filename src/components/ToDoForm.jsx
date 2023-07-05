/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    })

    setInput('')
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <form className="toDo-Form" onSubmit={handleSubmit}>
      
        {props.edit ? (
            <>
            <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            onChange={handleChange}
            className="toDo-input edit"
          />
          <button className="toDo-button edit">Update</button>
        </>
        ) : (
          <>
            <input
            type="text"
            placeholder="Add a to do"
            value={input}
            name="text"
            onChange={handleChange}
            className="toDo-input"
          />
          <button className="toDo-button">Add something to do</button>
        </>
        )}
    </form>
  );
}

export default ToDoForm;
