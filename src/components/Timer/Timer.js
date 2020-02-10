import React from 'react';
import PropTypes from 'prop-types';

import styles from './Timer.module.css';

const Timer = ({ counter, step, onIncrement, onDecrement, onChange }) => {
  const handleChange = e => {
    const { value } = e.target;
    onChange(+value);
  };
  return (
    <div className={styles.Timer_wrapper}>
      <input
        onChange={handleChange}
        value={step}
        type="number"
        className={styles.Timer_value}
      />

      <button
        type="button"
        onClick={() => onDecrement(step)}
        className={styles.Timer_button}
      >
        -
      </button>

      <div className={styles.Timer_counter}>{counter}</div>

      <button
        type="button"
        onClick={() => onIncrement(step)}
        className={styles.Timer_button}
      >
        +
      </button>
    </div>
  );
};

Timer.propTypes = {
  counter: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Timer;
