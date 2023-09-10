import { FC } from 'react';
import { IData } from '../main/Main';
import styles from './CardCheckbox.module.scss';
import { observer } from 'mobx-react-lite';
import todo from '../store/todo';

interface ICheckbox extends IData {
  setChecked: CallableFunction;
  key?: any;
}

const CardCheckbox: FC<ICheckbox> = observer(({ completed, setChecked, key }) => {
  return (
    <input
      className={styles.check}
      type="checkbox"
      checked={completed}
      onChange={() => setChecked(!completed)}
      onClick={() => todo.removeTodo(key)}
    />
  );
});

export default CardCheckbox;
