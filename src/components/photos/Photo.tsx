import React from 'react';
import classNames from 'classnames';
import styles from './photos.module.css';

interface PhotoProps {
  landscape?: boolean
  src: string
}

const Photo: React.StatelessComponent<PhotoProps> = ({ src, landscape = false }) => (
  <div
    className={classNames(styles.Photo, {
      [styles.landscape]: landscape,
    })}
  >
    <img className={styles.img} src={src} />
  </div>
);

export default Photo;
