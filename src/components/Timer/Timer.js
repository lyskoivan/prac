import React, { Component } from 'react';

import styles from './Timer.module.css';

export default class Timer extends Component {
  state = {
    counter: 0,
    value: 1,
  };

  handleDecrement = () => {
    const { value } = this.state;
    this.setState(prevState => ({ counter: prevState.counter + value }));
  };

  handleIncrement = () => {
    const { value } = this.state;
    this.setState(prevState => ({ counter: prevState.counter - value }));
  };

  handleChange = e => {
    this.setState({ value: +e.target.value });
  };

  render() {
    const { counter, value } = this.state;
    return (
      <div className={styles.Timer_wrapper}>
        <input
          onChange={this.handleChange}
          value={value}
          type="number"
          className={styles.Timer_value}
        />
        <button
          type="button"
          onClick={this.handleDecrement}
          className={styles.Timer_button}
        >
          +
        </button>
        <div className={styles.Timer_counter}>{counter}</div>
        <button
          type="button"
          onClick={this.handleIncrement}
          className={styles.Timer_button}
        >
          -
        </button>
      </div>
    );
  }
}
