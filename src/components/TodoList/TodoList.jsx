import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const dispatch = useDispatch();

  const todoList = useSelector((store) => store.todoReducer.todoList);

  // useEffect(() => {
  //     dispatch({ type: "SAGA_FETCH_TODO_LIST" });
  //   }, []);

  console.log("todoList", todoList);

  return (
    <div>
      <h3>This is the todo list</h3>

      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <p>Task: {todo.name}</p>
            <p>Finished: {todo.is_complete ? "completed" : "not complete"}</p>
            {todo.is_complete ? "completed" : <button>complete</button>}
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
