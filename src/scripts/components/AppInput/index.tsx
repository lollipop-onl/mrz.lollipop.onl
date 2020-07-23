import React, {FC, FormEvent} from 'react';
import { ReactiveState } from '../../hooks';
import styles from './index.modules.scss';

type Props = {
  value: ReactiveState<string>;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
};

const AppInput: FC<Props> = ({ value, ...props }) => {
  const onInput = (e: FormEvent<HTMLInputElement>) => {
    if (e.target instanceof HTMLInputElement) {
      value.update(e.target.value);
    }
  }

  return (
    <div className={styles.appInput}>
      <input
        className={styles.field}
        type="text"
        defaultValue={value.value}
        onInput={onInput}
        {...props}
      />
    </div>
  );
};

export { AppInput };
