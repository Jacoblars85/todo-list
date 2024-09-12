import { combineReducers } from 'redux';

const todoList = (state = [{name: 'pooooo', is_complete: false}, {name: 'peeee', is_complete: true}, {name: 'fart', is_complete: false}], action) => {
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
