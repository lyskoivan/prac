import * as actions from './tasksActions';
import * as API from '../../services/api';

export const getTasks = () => dispatch => {
  dispatch(actions.addTasksStart());

  API.getTasks()
    .then(res => dispatch(actions.addTasksSuccess(res.data)))
    .catch(err => dispatch(actions.addTasksError(err)));
};

export const deleteTask = id => dispatch => {
  dispatch(actions.deleteTaskStart());

  API.deleteTask(id)
    .then(() => dispatch(actions.deleteTaskSuccess(id)))
    .catch(err => dispatch(actions.deleteTaskError(err)));
};

export const createTask = task => dispatch => {
  dispatch(actions.createTaskStart());

  API.createTask(task)
    .then(res => dispatch(actions.createTaskSuccess(res.data)))
    .catch(err => dispatch(actions.createTaskError(err)));
};
