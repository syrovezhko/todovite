import styles from './Header.module.scss';
import HeaderTitle from '../headerTitle/HeaderTitle';
import HeaderSide from '../headerSide/HeaderSide';

const Header = () => {
  return (
    <header className={styles.row}>
      <HeaderTitle />
      <HeaderSide />
    </header>
  );
};

export default Header;
