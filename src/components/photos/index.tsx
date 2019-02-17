import React from 'react';
import PageTitle from '../PageTitle';
import Photo from './Photo';
import styles from './photos.module.css';

const Photos = () => {
  return (
    <div className={styles.Photos}>
      <PageTitle>Photos</PageTitle>
      <div className={styles.container}>
        <Photo />
        <Photo />
        <Photo />
        <Photo landscape />
        <Photo />
        <Photo />
      </div>
    </div>
  );
};

export default Photos;

