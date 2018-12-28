import React, { ReactChild } from 'react';

import styles from './Container.module.css';

interface ContainerProps {
  children: ReactChild | ReactChild[];
}

const Container = ({ children }: ContainerProps) => (
  <div className={styles.Container}>
    {children}
  </div>
);

export default Container;
