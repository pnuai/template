import React from 'react';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import styles from './styles.module.css';

export default function DocRootLayout({children}) {
  return (
    <div className={styles.docsWrapper}>
      <BackToTopButton />
      <div className={styles.docRoot}>
        <DocRootLayoutMain hiddenSidebarContainer={true}>
          {children}
        </DocRootLayoutMain>
      </div>
    </div>
  );
}
