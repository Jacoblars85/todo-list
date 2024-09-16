import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");

  const addItem = (e) => {
    e.preventDefault();

    dispatch({
      type: "SAGA_POST_NEW_TODO",
      payload: newTodo,
    });
    setNewTodo("");
  };

  return (
    <div>
      <h3>This is the form</h3>

      <form onSubmit={addItem}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Todo Item"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
