import React from 'react';
import Section from '../Section';
import Text from '../Text';
import styles from './TitleNavSection.module.css';

const TitleNavSection = () => (
  <div className={styles.TitleNavSection}>
    <Section>
      <div className={styles.names}>
        <Text size="large">CARRIE & CARTER</Text>
      </div>
      <hr className={styles.line} />
      <div className={styles.date}>
        <Text size="medium">June 22, 2019</Text>
      </div>
      <div className={styles.location}>
        <Text size="medium">Santa Fe, New Mexico</Text>
      </div>
    </Section>
  </div>
);

export default TitleNavSection;
