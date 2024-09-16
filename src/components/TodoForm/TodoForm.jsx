import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [item, setItem] = useState("");

  const addItem = (e) => {
    e.preventDefault();

    dispatch({
      type: "SAGA_POST_NEW_TODO",
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
          placeholder="Todo Item"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
