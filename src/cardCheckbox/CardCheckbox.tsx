import React, { FC } from 'react';
import { IData } from '../main/Main';
import styles from './CardCheckbox.module.scss';

interface ICheckbox extends IData {
  setChecked: CallableFunction;
}

const CardCheckbox: FC<ICheckbox> = ({ completed, setChecked }) => {
  return (
    <input
      className={styles.check}
      type="checkbox"
      checked={completed}
      onChange={() => setChecked(!completed)}
    />
  );
};

export default CardCheckbox;
