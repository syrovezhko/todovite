import React from 'react';
import styles from './CardBtn.module.scss';

const CardBtn = ({ type }: { type: string }) => {
  return (
      <p>{type === 'primary' ? 'Entity title' : `Front-end`}</p>
    </button>
  );
};

export default CardBtn;
