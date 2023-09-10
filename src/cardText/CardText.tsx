import React from 'react';
import { faker } from '@faker-js/faker';
import styles from './CardText.module.scss';

const CardText = () => {
  const text = faker.lorem.words(50);
  return <p className={styles.text}>{text}</p>;
};

export default CardText;
