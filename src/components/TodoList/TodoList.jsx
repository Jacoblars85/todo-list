import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

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
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoList;
