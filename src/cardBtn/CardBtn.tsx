import React from 'react';
import styles from './CardBtn.module.scss';

const CardBtn = ({ type }: { type: string }) => {
  return (
    <button className={`${styles.btn} ${styles.type}`}>
      {type === 'primary' ? 'Entity title' : 'Front-end'}
    </button>
  );
};

export default CardBtn;
