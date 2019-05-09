import React from 'react';
import styles from './Accommodation.module.css';

const AccommodationDetails : React.StatelessComponent= ({ children }) => {
  return (
    <div className={styles.AccommodationDetails}>
      {children}
    </div>
  );
};

export default AccommodationDetails;
