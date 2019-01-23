import React, { ReactChild } from 'react';

import styles from './Container.module.css';

interface ContainerProps {
  children: ReactChild | ReactChild[];
}

const Container = ({ children }: ContainerProps) => (
  <div className={styles.Container}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

export default Container;
