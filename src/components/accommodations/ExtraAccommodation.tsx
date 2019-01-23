import React, { ReactChild } from 'react';
import styles from './ExtraAccommodations.module.css';

interface ExtraAccommodationProps {
  link: string
  name: string
  details: string
}

const ExtraAccommodation = ({ link, name, details }: ExtraAccommodationProps) => {
  return (
    <li className={styles.item}>
      <a href={link} className={styles.link}>{name}</a>
      <span>- {details}</span>
    </li>
  );
};

export default ExtraAccommodation;
