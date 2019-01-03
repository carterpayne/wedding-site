import React, { ReactChild } from 'react';
import styles from './Accommodation.module.css';

interface AccommodationProps {
  children: ReactChild[]
}

const Accommodation = ({ children }: AccommodationProps) => {
  return (
    <div className={styles.Accommodation}>
      {children}
    </div>
  );
};

export default Accommodation;
