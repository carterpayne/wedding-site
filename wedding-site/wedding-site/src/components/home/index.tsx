import React from 'react';
import Hero from './Hero';
import Announcement from './Announcement';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.Home}>
    <Hero />
    <Announcement />
  </div>
);

export default Home;
