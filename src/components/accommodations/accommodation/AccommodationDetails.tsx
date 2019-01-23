import React, { ReactChild } from 'react';
import styles from './Accommodation.module.css';

interface AccommodationDetailsProps {
  children: (string | ReactChild)[]
}

const AccommodationDetails = ({ children }: AccommodationDetailsProps) => {
  return (
    <div className={styles.AccommodationDetails}>
      {children}
    </div>
  );
};

export default AccommodationDetails;
