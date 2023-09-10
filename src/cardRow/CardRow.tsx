import React from 'react';
import CardDate from '../cardDate/CardDate';
import styles from './CardRow.module.scss';
import { useRandomDate } from '../hooks/useRandomDate';

const CardRow = () => {
  return (
    <div className={styles.row}>
      <CardDate date={useRandomDate()} />
      <CardDate date={useRandomDate()} />
    </div>
  );
};

export default CardRow;
