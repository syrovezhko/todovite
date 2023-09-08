import React from 'react';
import styles from './CardFooter.module.scss';
import CardBtnContainer from '../cardBtnContainer/CardBtnContainer';
import CardUserImg from '../cardUserImg/CardUserImg';

const CardFooter = () => {
  return (
    <div className={styles.row}>
      <CardBtnContainer />
      <CardUserImg />
    </div>
  );
};

export default CardFooter;
