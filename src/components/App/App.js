import React from 'react';

import Timer from '../Timer/Timer';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App_wrapper}>
      <Timer />
    </div>
  );
}

export default App;
