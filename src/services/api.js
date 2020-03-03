import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

export const getTasks = () => axios.get('/tasks');

export const createTask = task => axios.post('/tasks', task);

export const deleteTask = id => axios.delete(`/tasks/${id}`);
