import React from 'react';
import styles from './HeaderAddBtn.module.scss';
import icon from './../../public/addBtn.svg';

const HeaderAddBtn = () => {
  return (
    <button className={styles.btn}>
      <img src={icon} alt="add" />
    </button>
  );
};

export default HeaderAddBtn;
