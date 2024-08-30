import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [item, setItem] = useState("");

  const addItem = (e) => {
    e.preventDefault();

    dispatch({
      type: "CREATE_AIRLINE",
      payload: item,
    });
    setItem("");
  };

  return (
    <div>
      <h3>This is the form</h3>

      <form onSubmit={addItem}>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Todo Name"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
