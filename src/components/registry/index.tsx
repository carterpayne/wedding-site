import React from 'react';
import Site from './Site';
import PageTitle from '../PageTitle';
import { ZOLA_LINK, WILLIAMS_SONOMA_LINK } from '../../constants/registry';

import styles from './registry.module.css';

const Registry = () => {
  return (
    <div className={styles.Sites}>
      <PageTitle>Registry</PageTitle>
      <div className={styles.sitelist}>
        <Site name="Zola" url={ZOLA_LINK} />
        <Site name="Williams Sonoma" url={WILLIAMS_SONOMA_LINK} />
      </div>
    </div>
  );
};

export default Registry;
