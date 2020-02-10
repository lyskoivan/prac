import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import timerReducer from './timerApp/timerReducer';

const rootReducer = combineReducers({
  timer: timerReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
