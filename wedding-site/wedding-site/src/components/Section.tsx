import React, { ReactChild } from 'react';

import styles from './Section.module.css';

interface SectionProps {
  children: ReactChild
}

const Section = ({ children }: SectionProps) => (
  <div className={styles.Section}>
    {children}
  </div>
);

export default Section;
