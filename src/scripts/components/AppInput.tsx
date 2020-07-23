import React, {FC, FormEvent} from 'react';
import { ReactiveState } from '../hooks';

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
    <input
      type="text"
      defaultValue={value.value}
      onInput={onInput}
      {...props}
    />
  );
}

export { AppInput };
