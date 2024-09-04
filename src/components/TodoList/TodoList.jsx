import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function TodoList() {
    const dispatch = useDispatch();

    const todoList = useSelector((store) => store.todoList);

    useEffect(() => {

    }, []); 


    return (
        <div>
            <h3>This is the todo list</h3>

            <p></p>
        </div>
    );
}

export default TodoList;
