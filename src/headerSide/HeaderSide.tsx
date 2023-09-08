import React from 'react';
import styles from './HeaderSide.module.scss';
import HeaderAddBtn from '../headerAddBtn/HeaderAddBtn';

const HeaderSide = () => {
  return (
    <div className={styles.side}>
      <HeaderAddBtn />
    </div>
  );
};

export default HeaderSide;
