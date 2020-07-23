import React, { FC } from 'react';
import styles from './index.modules.scss';

type Props = {};

const AppFooter: FC<Props> = () => {
  return (
    <footer className={styles.appFooter}>
      <div className={styles.container}>
        <small className={styles.copyright}>&copy; 2020 lollipop.onl</small>
      </div>
    </footer>
  )
};

export { AppFooter };
