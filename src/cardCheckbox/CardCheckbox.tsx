import React, { FC } from 'react';
import { IData } from '../main/Main';

interface ICheckbox extends IData {
  setChecked: CallableFunction;
}

const CardCheckbox: FC<ICheckbox> = ({ completed, setChecked }) => {
  return <input type="checkbox" checked={completed} onChange={() => setChecked(!completed)} />;
};

export default CardCheckbox;
