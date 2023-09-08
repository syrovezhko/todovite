import React from 'react';
import styles from './CardDateRow.module.scss';

const CardDateRow = () => {
  const randomDate = (start: Date, end: Date) => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleString('en-US', options);
  };
  const startDate = randomDate(new Date(2023, 0, 1), new Date());
  const endDate = randomDate(new Date(2023, 0, 1), new Date());
  return (
    <div className={styles.row}>
    </div>
  );
};

export default CardDateRow;
