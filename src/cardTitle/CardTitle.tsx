import React, { FC } from 'react';
import { IData } from '../main/Main';

const CardTitle: FC<IData> = ({ title }) => {
  return <label>{title}</label>;
};

export default CardTitle;
