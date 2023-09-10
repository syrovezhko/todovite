import styles from './HeaderSide.module.scss';
import HeaderAddBtn from '../headerAddBtn/HeaderAddBtn';
import HeaderDisplay from '../headerDisplay/HeaderDisplay';

const HeaderSide = () => {
  return (
    <div className={styles.side}>
      <HeaderAddBtn />
      <HeaderDisplay />
    </div>
  );
};

export default HeaderSide;
