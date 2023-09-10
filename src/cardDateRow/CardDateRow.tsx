import React from 'react';
import CardDate from '../cardDate/CardDate';
import styles from './CardDateRow.module.scss';
import { useRandomDate } from '../hooks/useRandomDate';

const CardDateRow = () => {
  return (
    <div className={styles.row}>
      <CardDate date={useRandomDate()} />
      <CardDate date={useRandomDate()} />
    </div>
  );
};

export default CardDateRow;
