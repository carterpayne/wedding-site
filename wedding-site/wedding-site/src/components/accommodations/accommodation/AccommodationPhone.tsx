import React from 'react';
import styles from './Accommodation.module.css';

const AccommodationPhone = ({ number }) => {
  return (
    <a className={styles.phone} href={`tel:${number}`}>
      ({number.splice(0, 3)}) {number.splice(3, 3)}-{number.splice(6, 4)}
    </a>
  );
};

export default AccommodationPhone;
