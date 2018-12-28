import React from 'react';
import styles from 'Accommodation.module.css';

const Accommodation = ({ children }: ReactChild[]) => {
  return (
    <div className={styles.Accommodation}>
      {children}
    </div>
  );
};

export default Accommodation;
