import React, { FC, useState } from 'react';
import styles from './Card.module.scss';
import CardCheckbox from '../cardCheckbox/CardCheckbox';
import { IData } from '../main/Main';
import CardTitle from '../cardTitle/CardTitle';
import CardDateRow from '../cardDateRow/CardDateRow';
import CardText from '../cardText/CardText';

const Card: FC<IData> = ({ userId, id, title, completed }) => {
  const [checked, setChecked] = useState(completed);
  return (
    <form>
      <CardCheckbox completed={checked} setChecked={setChecked} />
      <CardTitle title={title} />
      <CardDateRow />
      <CardText/>
    </form>
  );
};

export default Card;
