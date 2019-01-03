import React from 'react';
import styles from './Directions.module.css';
import postcard from '../../assets/postcard.png';

const Postcard = () => (
  <div className={styles.Postcard}>
    <img alt="Santa Fe!" src={postcard} className={styles.img} />
  </div>
);

export default Postcard;
