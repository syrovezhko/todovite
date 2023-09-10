import React, { FC } from 'react';
import styles from './CardRow.module.scss';

interface ICardRow {
  children: CallableFunction;
  type: string;
}

const CardRow: FC<ICardRow> = ({ children, type }) => {
  return <div className={`${styles.row} ${styles.type}`}>{children()}</div>;
};

export default CardRow;
