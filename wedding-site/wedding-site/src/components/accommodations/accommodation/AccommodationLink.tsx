import React from 'react';
import styles from './Accommodation.module.css';

interface AccommodationLinkProps {
  url: string
  children: string
}

const AccommodationLink = ({ children, url }: AccommodationLinkProps) => {
  return (
    <div className={styles.AccommodationLink}>
      <span className={styles.linkLabel}>More Info:</span>
      <a href={url}>{children}</a>
    </div>
  );
};

export default AccommodationLink;
