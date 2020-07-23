import React, { FC } from 'react';
import styles from './index.modules.scss';

type Props = {};

const AppFooter: FC<Props> = () => {
  return (
    <footer className={styles.appFooter}>
      <div className={styles.container}>
        <p className={styles.note}>★ 入力内容のセキュリティは保証いたしません。実在するパスポート情報を入力しないようお気をつけください。</p>
        <p className={styles.note}>☆ このサイトではGoogle Analyticsによるアクセス解析を使用しています。</p>
        <a
          className={styles.link}
          href="https://github.com/lollipop-onl/mrz.lollipop.onl"
          target="_blank"
          rel="noreferrer noopener"
        >
          Repository
        </a>
        <a
          className={styles.link}
          href="https://github.com/lollipop-onl/mrz.lollipop.onl/issues/new"
          target="_blank"
          rel="noreferrer noopener"
        >
          Report bugs
        </a>
        <a
          className={styles.link}
          href="https://twitter.com/lollipop_onl"
          target="_blank"
          rel="noreferrer noopener"
        >
          @lollipop_onl
        </a>
      </div>
    </footer>
  )
};

export { AppFooter };
