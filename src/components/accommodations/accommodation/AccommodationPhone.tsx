import React from 'react';
import styles from './Accommodation.module.css';

interface AccommodationPhoneProps {
  number: string
}

const AccommodationPhone = ({ number }: AccommodationPhoneProps) => {
  return (
    <a className={styles.phone} href={`tel:${number}`}>
      ({number.slice(0, 3)}) {number.slice(3, 6)}-{number.slice(6)}
    </a>
  );
};

export default AccommodationPhone;
