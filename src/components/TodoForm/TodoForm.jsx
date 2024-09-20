import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./TodoForm.css";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = (e) => {
    e.preventDefault();

    console.log("newTodo", newTodo);

    // dispatch({
    //   type: "SAGA_POST_NEW_TODO",
    //   payload: newTodo,
    // });
    setNewTodo("");
  };

  return (
    <div>
      <h3>This is the form</h3>

      <form onSubmit={addNewTodo}>
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
