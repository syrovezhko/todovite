import styles from './HeaderDisplay.module.scss';
import { observer } from 'mobx-react-lite';
import todo from '../store/todo';

const HeaderDisplay = observer(() => {
  return <div className={styles.number}>{todo.completedTasks}</div>;
});

export default HeaderDisplay;
