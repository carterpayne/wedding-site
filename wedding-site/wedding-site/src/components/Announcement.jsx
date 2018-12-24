import React from 'react';
import styles from './Announcement.module.css';

import names from '../assets/names.png';
import date from '../assets/date.png';

const Announcement = () => (
  <div className={styles.Announcement}>
    <img className={styles.names} src={names} alt="Carrie and Carter" />
    <img className={styles.date} src={date} alt="June 22nd 2019 | Santa Fe, NM" />
  </div>
);

export default Announcement;
