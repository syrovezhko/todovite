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
  return (
    <div className={styles.row}>
    </div>
  );
};

export default CardDateRow;
