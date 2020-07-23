import React, { FC } from 'react';
import styles from './index.modules.scss';

type Props = {};

const AppHeader: FC<Props> = () => {
  return (
    <header className={styles.appHeader}>
      <div className={styles.logo}>Passport MRZ Simulator</div>
    </header>
  )
};

export { AppHeader };
