import * as types from './tasksTypes';

// Create Task

export const createTaskStart = () => ({
  type: types.CREATE_TASK_START,
});

export const createTaskSuccess = task => ({
  type: types.CREATE_TASK_SUCCESS,
  payload: { task },
});

export const createTaskError = error => ({
  type: types.CREATE_TASK_ERROR,
  payload: { error },
});

// Delete Task

export const deleteTaskStart = () => ({
  type: types.DELETE_TASK_START,
});

export const deleteTaskSuccess = id => ({
  type: types.DELETE_TASK_SUCCESS,
  payload: { id },
});

export const deleteTaskError = error => ({
  type: types.DELETE_TASK_ERROR,
  payload: { error },
});

// Add many tasks

export const addTasksStart = () => ({
  type: types.ADD_TASKS_START,
});

export const addTasksSuccess = tasks => ({
  type: types.ADD_TASKS_SUCCESS,
  payload: { tasks },
});

export const addTasksError = error => ({
  type: types.ADD_TASKS_ERROR,
  payload: { error },
});
