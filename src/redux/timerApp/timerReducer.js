import { combineReducers } from 'redux';
import Type from './timerType';

const timerReducer = (state = 0, action) => {
  switch (action.type) {
    case Type.DECREMENT:
      return state - action.payload.counter;

    case Type.INCREMENT:
      return state + action.payload.counter;

    default:
      return state;
  }
};

const timerStepReducer = (state = 1, action) => {
  switch (action.type) {
    case Type.CHANGE_STEP:
      return action.payload.step;

    default:
      return state;
  }
};

const timeReducer = combineReducers({
  value: timerReducer,
  step: timerStepReducer,
});

export default timeReducer;
