import React from 'react';
import styles from './PageTitle.module.css';
import Text from './Text';

interface PageTitleProps {
  children: string
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <div className={styles.PageTitle}>
      <Text size="large" fancy>
        {children}
      </Text>
    </div>
  );
};

export default PageTitle;
