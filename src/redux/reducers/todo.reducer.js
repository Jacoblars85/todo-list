import { combineReducers } from 'redux';

const todoList = (state = ['pooooo'], action) => {
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
