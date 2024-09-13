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

  const finishTodo = () => {
    console.log('finishing');
    
    // dispatch({
    //     type: "SAGA_FINISH_TODO",
    //     payload: character.id,
    //   });
  };

  const deleteTodo = () => {
    console.log('deleting');
    
    // dispatch({
    //     type: "SAGA_DELETE_TODO",
    //     payload: character.id,
    //   });
  };

  return (
    <div>
      <h3>This is the todo list</h3>

      {todoList.map((todo) => {
        return (
<TodoItem todo={todo} key={todo.id}/>
        );
      })}
    </div>
  );
}

export default TodoList;
