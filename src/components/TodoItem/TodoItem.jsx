import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const todoList = useSelector((store) => store.todoReducer.todoList);

  const finishTodo = () => {
    console.log('finishing');
    
    dispatch({
        type: "SAGA_FINISH_TODO",
        payload: todo.id,
      });
  };

  const deleteTodo = () => {
    console.log('deleting');
    
    dispatch({
        type: "SAGA_DELETE_TODO",
        payload: todo.id,
      });
  };

  return (
    <div>
            <p>Task: {todo.name}</p>
            <p>Finished: {todo.is_complete ? "complete" : "not complete"}</p>
            {todo.is_complete ? "completed" : <button onClick={finishTodo}>complete</button>}
            <button onClick={deleteTodo}>delete</button>
    </div>
  );
}

export default TodoItem;