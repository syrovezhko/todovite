import { FC, useState } from 'react';
import styles from './Card.module.scss';
import CardCheckbox from '../cardCheckbox/CardCheckbox';
import { IData } from '../main/Main';
import CardTitle from '../cardTitle/CardTitle';
import CardRow from '../cardRow/CardRow';
import CardText from '../cardText/CardText';
import CardFooter from '../cardFooter/CardFooter';
import CardDate from '../cardDate/CardDate';

const Card: FC<IData> = ({ title, completed }) => {
  const [checked, setChecked] = useState(completed);
  const dates = () => (
    <>
      <CardDate />
      <CardDate />
    </>
  );
  const rowTitle = () => (
    <label className={styles.label}>
      <CardCheckbox completed={checked} setChecked={setChecked} />
      <CardTitle title={title} />
    </label>
  );

  return (
    <>
      {Boolean(!checked) && <div className={styles.container}>
        <form className={styles.card}>
          <CardRow children={rowTitle} type="title" />
          <CardRow children={dates} type="date"/>
          <CardText />
          <CardFooter />
        </form>
      </div>}
    </>
  );
};

export default Card;
