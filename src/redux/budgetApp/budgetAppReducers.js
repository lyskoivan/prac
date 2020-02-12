import * as types from './budgetAppTypes';
import { combineReducers } from 'redux';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_BUDGET:
      return action.payload.budget;

    default:
      return state;
  }
};

const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [action.payload.expense, ...state];

    case types.REMOVE_EXPENSE:
      return state.filter(exp => exp.id !== action.payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReducer,
  expense: expenseReducer,
});
