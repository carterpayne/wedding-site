import React from 'react';
import styles from './Accommodation.module.css';

const AccommodationLink = ({ url, children }) => {
  return (
    <div className={styles.link}>
      <span className={styles.linkLabel}>Website: </span>
      <a href={url}>{children}</a>
    </div>
  );
};

export default AccommodationLink;
