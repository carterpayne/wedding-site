import React from 'react';
import styles from './Accommodation.module.css';
import Text from '../../Text';

interface AccommodationTitleProps {
  children: string
}

const AccommodationTitle = ({ children }: AccommodationTitleProps) => {
  return (
    <div className={styles.title}>
      <Text size="medium">
        {children}
      </Text>
    </div>
  );
};

export default AccommodationTitle;
