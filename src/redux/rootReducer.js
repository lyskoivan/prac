import { combineReducers } from 'redux';
import reducer from './budgetApp/budgetAppReducers';

const rootReducer = combineReducers({
  budgetApp: reducer,
});

export default rootReducer;
