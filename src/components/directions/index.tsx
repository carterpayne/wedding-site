import React from 'react';
import styles from './Directions.module.css';
import PageTitle from '../PageTitle';
import Text from '../Text';
import Postcard from './Postcard';

const Directions = () => {
  return (
    <div className={styles.Directions}>
      <PageTitle>Directions</PageTitle>
      <Postcard />
      <div className={styles.option}>
        <div className={styles.title}>
          <Text size="medium">Albuquerque International Sunport</Text>
        </div>
        <div>The closest major airport to Santa Fe is in Albuquerque, about an hour’s drive south. We would recommend renting a car, but there is also a <a href="https://www.visitalbuquerque.org/things-to-do/tours-sightseeing/self-guided/rail-runner/">train</a>, <a href="http://sandiashuttle.com/">shuttle</a> or <a href="https://roadrunnershuttleandcharter.com/">private shuttle (minimum 5 people)</a> option.</div>
      </div>
      <div className={styles.option}>
        <div className={styles.title}>
          <Text size="medium">Santa Fe Municipal Airport</Text>
        </div>
        <div>American Airlines offers daily non-stop flights to/from DFW and Phoenix. United Airlines offers daily non-stop flight service to/from Denver. While the flight options are more limited, this is also a great option.</div>
      </div>
    </div>
  );
};

export default Directions;
