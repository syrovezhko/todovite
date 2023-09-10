import styles from './CardBtnContainer.module.scss';
import CardBtn from '../cardBtn/CardBtn';

const CardBtnContainer = () => {
  return (
    <div className={styles.row}>
      <CardBtn type={'primary'} />
      <CardBtn type={'secondary'} />
    </div>
  );
};

export default CardBtnContainer;
