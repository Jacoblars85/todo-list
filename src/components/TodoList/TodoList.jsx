import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function TodoList() {
    const dispatch = useDispatch();

    const todoList = useSelector((store) => store.todoReducer.todoList);

    // useEffect(() => {
    //     dispatch({ type: "SAGA_FETCH_TODO_LIST" });
    //   }, []); 

    console.log('todoList', todoList);
    
    return (
        <div>
            <h3>This is the todo list</h3>

            {todoList.map((todo) => {
            return (
              <div key={todo.id}>
            <p>{todo.name}</p>
            <p>{todo.is_complete}</p>
              </div>
            );
          })}

        </div>
    );
}

export default TodoList;
