import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchTodoList() {
  // console.log('action.payload', action.payload);
  try {
    const todoListResponse = yield axios.get(`/api/todo/list`);
    yield put({
      type: 'SET_TODO_LIST',
      payload: todoListResponse.data
    });
  } catch (error) {
    console.log('fetchTodoList error:', error);
  }
}

function* postNewTodo(action) {
    // console.log('action', action.payloaad);
    try {
      const response = yield axios({
        method: 'POST',
        url: '/api/todo/new',
        data: action.payload
      })
      yield put({
        type: 'SAGA_FETCH_TODO_LIST',
      })
    } catch (error) {
      console.log('Unable to posting new todo to server', error);
    }
  }

  function* finishTodo(action) {
    // console.log('action.payload', action.payload);
    try {
      const response = yield axios({
        method: 'PUT',
        url: `/api/todo/finish`,
        data: action.payload
      })
      yield put({
        type: 'SAGA_FETCH_TODO_LIST',
      })
    } catch (error) {
      console.log('Unable to finish todo to server', error);
    }
  }

function* characterSaga() {
  yield takeLatest('SAGA_FETCH_TODO_LIST', fetchTodoList);
  yield takeLatest('SAGA_POST_NEW_TODO', postNewTodo);
  yield takeLatest('SAGA_FINISH_TODO', finishTodo);

}

export default characterSaga;