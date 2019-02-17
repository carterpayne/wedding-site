import React from 'react';
import classNames from 'classnames';
import styles from './photos.module.css';

interface PhotoProps {
  landscape: boolean
}

const Photo = ({ landscape = false }) => (
  <div
    className={classNames(styles.Photo, {
      [styles.landscape]: landscape,
    })}
  >
  </div>
);

export default Photo;
