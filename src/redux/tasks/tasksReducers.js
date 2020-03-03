import { combineReducers } from 'redux';

import * as types from './tasksTypes';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_TASK_SUCCESS:
      return [action.payload.task, ...state];

    case types.DELETE_TASK_SUCCESS:
      return state.filter(task => task.id !== action.payload.id);

    case types.ADD_TASKS_SUCCESS:
      return action.payload.tasks;

    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case types.ADD_TASKS_START:
    case types.CREATE_TASK_START:
    case types.DELETE_TASK_START:
      return null;

    case types.ADD_TASKS_ERROR:
    case types.CREATE_TASK_ERROR:
    case types.DELETE_TASK_ERROR:
      return action.payload.error;

    default:
      return state;
  }
};

const reducer = combineReducers({ tasks: tasksReducer, error: errorReducer });

export default reducer;
