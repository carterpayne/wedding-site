import React from 'react';
import styles from './Accommodation.module.css';

const AccommodationTitle = ({ children }: { children: string }) => {
  return (
    <div className={styles.title}>
      {children}
    </div>
  );
};

export default AccommodationTitle;
