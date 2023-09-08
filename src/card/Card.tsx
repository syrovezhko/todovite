import React, { FC, useState } from 'react';
import styles from './Card.module.scss'
import { IData } from '../main/Main';

const Card: FC<IData> = ({userId, id, title, completed}) => {
  const [checked, setChecked] = useState(completed)
  return (
    <div>
      card
    </div>
  );
};

export default Card;