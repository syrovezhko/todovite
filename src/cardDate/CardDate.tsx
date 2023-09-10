import React from 'react';
import styles from './CardDate.module.scss';
import { useRandomDate } from '../hooks/useRandomDate';

const CardDate = () => {
  return <p className={styles.time}>{useRandomDate()}</p>;
};

export default CardDate;
