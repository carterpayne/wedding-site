import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './photos.module.css';
import { ReactComponent as Loader } from '../../assets/loader.svg';

interface PhotoProps {
  src: string
  width?: number
  height?: number
}

const Photo: React.StatelessComponent<PhotoProps> = ({ src, width = 200, height = 265 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={classNames(styles.Photo, {
        [styles.loaded]: isLoaded,
      })}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
        <img className={styles.img} src={src} onLoad={() => setIsLoaded(true)} />
        {!isLoaded && <Loader />}
      </div>
  );
};

export default Photo;
