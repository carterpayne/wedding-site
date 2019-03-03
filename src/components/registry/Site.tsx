import React from 'react';
import Text from '../Text';
import styles from './site.module.css';

interface SiteProps {
  url: string
  name: string
}

const Site: React.StatelessComponent<SiteProps> = ({ url, name }) => {
  return (
    <div className={styles.Site}>
      <div className={styles.sitename}>
        <Text>{name}</Text>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>Shop Registry</a>
    </div>
  );
};

export default Site;
