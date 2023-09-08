import React from 'react';
import styles from './HeaderDisplay.module.scss';

const HeaderDisplay = ({ number }: { number: number }) => {
  return <div className={styles.number}>{number}</div>;
};

export default HeaderDisplay;
