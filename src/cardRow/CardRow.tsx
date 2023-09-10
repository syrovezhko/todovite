import React, { FC } from 'react';
import styles from './CardRow.module.scss';

interface ICardRow {
  children: CallableFunction;
  type: string;
  key: number;
}

const CardRow: FC<ICardRow> = ({ children, type, key }) => {
  return <div className={`${styles.row} ${styles[type]}`}>{children(key)}</div>;
};

export default CardRow;
