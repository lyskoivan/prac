import Type from './timerType';

export const timerDecrement = counter => ({
  type: Type.DECREMENT,
  payload: {
    counter,
  },
});

export const timerIncrement = counter => ({
  type: Type.INCREMENT,
  payload: {
    counter,
  },
});

export const changeStep = step => ({
  type: Type.CHANGE_STEP,
  payload: {
    step,
  },
});
