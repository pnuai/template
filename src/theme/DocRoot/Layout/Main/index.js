import React from 'react';
import styles from './styles.module.css';

export default function DocRootLayoutMain({children}) {
  return (
    <main className={styles.docMainContainer}>
      <div className={styles.docItemWrapper}>
        {children}
      </div>
    </main>
  );
}
