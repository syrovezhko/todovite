import React, { FC } from 'react';
import CardDate from '../cardDate/CardDate';
import styles from './CardRow.module.scss';
import { useRandomDate } from '../hooks/useRandomDate';

interface ICardRow {
  children: CallableFunction;
  type: string;
}

const CardRow: FC<ICardRow> = ({ children, type }) => {
  return <div className={`${styles.row} ${styles.type}`}>{children()}</div>;
};

export default CardRow;
