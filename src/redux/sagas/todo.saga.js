import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchTodoList() {
  // console.log('action.payload', action.payload);
  try {
    const todoListResponse = yield axios.get(`/api/todo`);
    yield put({
      type: 'SET_TODO_LIST',
      payload: todoListResponse.data
    });
  } catch (error) {
    console.log('fetchTodoList error:', error);
  }
}

function* characterSaga() {
  yield takeLatest('SAGA_FETCH_TODO_LIST', fetchTodoList);
}

export default characterSaga;