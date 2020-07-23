import React, { FC } from 'react';
import styles from './index.modules.scss';

type Props = {
  label: string;
  help?: string;
}

const
  AppField: FC<Props> = ({ children, label, help }) => {
  return (
    <label className={styles.appField}>
      <div className={styles.label}>{label}</div>
      {children}
      { help ? <p className={styles.help}>{help}</p> : null }
    </label>
  )
}

export { AppField };
