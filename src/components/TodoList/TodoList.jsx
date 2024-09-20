import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList() {
  const dispatch = useDispatch();

  const todoList = useSelector((store) => store.todoReducer.todoList);

  // useEffect(() => {
  //     dispatch({ type: "SAGA_FETCH_TODO_LIST" });
  //   }, []);

  console.log("todoList", todoList);

  return (
    <div>
      {todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoList;
