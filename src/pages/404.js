import React from 'react';

import '../common.module.css';
import styles from './404.module.css';

export default function FourOFour() {
  return (
    <div className={styles.content}>
      <h1>404: Page Not Found</h1>
      <p>The page you are looking for does not exist.  Click <a href='/'>here</a> to return to the home page.</p>
    </div>
  );
};
