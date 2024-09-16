import { combineReducers } from 'redux';

const todoList = (state = [{id: 1, name: 'pooooo', is_complete: false}, {id: 2, name: 'peeee', is_complete: true}, {id: 3, name: 'fart', is_complete: false}], action) => {
  switch (action.type) {
    case 'SET_TODO_LIST':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
    todoList,
});
