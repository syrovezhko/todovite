import React, { FC } from 'react';
import { IData } from '../main/Main';
import styles from './CardTitle.module.scss';

const CardTitle: FC<IData> = ({ title }) => {
  return <label className={styles.text}>{title}</label>;
};

export default CardTitle;
