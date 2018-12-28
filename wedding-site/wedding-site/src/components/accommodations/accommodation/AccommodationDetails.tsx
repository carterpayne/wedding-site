import React from 'react';
import styles from 'Accommodation.module.css';

const AccommodationDetails = ({ children }: ReactChild) => {
  return (
    <div className={styles.accommodationDetails}>
      {children}
    </div>
  );
};

export default AccommodationDetails;
