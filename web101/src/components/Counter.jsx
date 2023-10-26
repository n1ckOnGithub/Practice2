import React from 'react';
import styles from './counter.module.css';

const Counter = (props) => {
  return (
    <div className={styles.counter}>
      <p>Counter: {props.count}</p>
      <div className="count"></div>
    </div>
  )
}

export default Counter;
