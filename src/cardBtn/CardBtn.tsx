import React from 'react';
import styles from './CardBtn.module.scss';
import img from './../../public/cardBtn.svg';

const CardBtn = ({ type }: { type: string }) => {
  return (
      <p>{type === 'primary' ? 'Entity title' : `Front-end`}</p>
      {Boolean(type === 'secondary') && <img src={img} alt="arrow" />}
    </button>
  );
};

export default CardBtn;
