import { useState } from 'react';

export type ReactiveState<T> = {
  value: T,
  update: (value: T) => void;
}

export const useReactiveState = <T>(initialValue: T): ReactiveState<T> => {
  const [value, setValue] = useState<T>(initialValue);

  return {
    value,
    update: setValue,
  }
}
