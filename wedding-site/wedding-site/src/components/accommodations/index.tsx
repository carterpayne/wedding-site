import React from 'react';
import styles from './Accommodations.module.css';
import Accommodation from './accommodation';
import AccommodationLink from './accommodation/AccommodationLink';
import AccommodationTitle from './accommodation/AccommodationTitle';
import AccommodationDetails from './accommodatoin/AccommodationDetails';
import AccommodationPhone from './accommodation/AccommodationPhone';
import ExtraAccommodation from './ExtraAccommodation';
import ExtraAccommodations from './ExtraAccommodations';

const Accommodations = () => {
  return (
    <div className={styles.Accommodations}>
      <Accommodation>
        <AccommodationTitle>La Fonda on the Plaza</AccommodationTitle>
        <AccommodationLink url="https://www.lafondasantafe.com/">La Fonda on the Plaza</AccommodationLink>
        <AccommodationDetails>This is the location for the wedding and reception. A block of traditional rooms are being held under “Snow / Payne Wedding”. The group rate at La Fonda is $239.00 per night for single or double occupancy. Rooms can be reserved by contacting La Fonda at <AccommodationPhone number="5059825511" />. The rooms will be held at this rate until April 22.
        </ AccommodationDetails>
      </Accommodation>
      <Accommodation>
        <AccommodationTitle>Inn on the Alameda</AccommodationTitle>
        <AccommodationLink url="https://www.innonthealameda.com/">Inn on the Alameda</AccommodationLink>
        <AccommodationDetails>A block of rooms are being held under “Snow / Payne Wedding”. Traditional rooms are $190.00 per night (additional adults are $35.00 per night, maximum of 3 adults per room is permitted). Group rates will be extended three days pre and post wedding weekend. Continental breakfast is included, and there is no additional charge for parking. Reservations must be cancelled 14 days prior to arrival to avoid a penalty of one night’s room and tax. Rooms can be reserved by contacting Inn on the Alameda at <AccommodationPhone number="5059842121 />.</AccommodationDetail>
        </ AccommodationDetails>
      </Accommodation>
      <Accommodation>
        <AccommodationTitle>Other Accommodations</AccommodationTitle>
        <ExtraAccommodations>
          <ExtraAccommodation>
            <a href="http://www.elreycourt.com/">El Rey Court</a>
            <span>Boutique hotel 3 miles from the Santa Fe Plaza</span>
          </ExtraAccommodation>
          <ExtraAccommodation>
            <a href="https://www.santafesageinn.com/">Sage Inn</a>
            <span>1 mile from the Santa Fe Plaza</span>
          </ExtraAccommodation>
        </ExtraAccommodations>
      </Accommodation>
    </div>
  );
};

export default Accommodations;
