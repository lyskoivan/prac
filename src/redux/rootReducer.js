import { combineReducers } from 'redux';

import tskReducer from './tasks/tasksReducers';

export default combineReducers({ app: tskReducer });
