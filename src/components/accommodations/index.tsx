import React from 'react';
import styles from './Accommodations.module.css';
import Accommodation from './accommodation';
import AccommodationLink from './accommodation/AccommodationLink';
import AccommodationTitle from './accommodation/AccommodationTitle';
import AccommodationDetails from './accommodation/AccommodationDetails';
import AccommodationPhone from './accommodation/AccommodationPhone';
import ExtraAccommodation from './ExtraAccommodation';
import ExtraAccommodations from './ExtraAccommodations';
import PageTitle from '../PageTitle';
import Map from './Map';

const Accommodations = () => {
  return (
    <div className={styles.Accommodations}>
      <PageTitle>Accommodations</PageTitle>
      <Accommodation>
        <AccommodationTitle>La Fonda on the Plaza</AccommodationTitle>
        <AccommodationDetails>This is the location for the wedding and reception. A block of traditional rooms are being held under “Snow / Payne Wedding”. The group rate at La Fonda is $239.00 per night for single or double occupancy. Rooms can be reserved by contacting La Fonda at <AccommodationPhone number="5059825511" />. The rooms will be held at this rate until April 22.
        </ AccommodationDetails>
        <AccommodationLink url="https://www.lafondasantafe.com/">La Fonda on the Plaza</AccommodationLink>
      </Accommodation>
      <Accommodation>
        <AccommodationTitle>Inn on the Alameda</AccommodationTitle>
        <AccommodationDetails>A block of rooms are being held under “Snow / Payne Wedding”. Traditional rooms are $190.00 per night (additional adults are $35.00 per night, maximum of 3 adults per room is permitted). Group rates will be extended three days pre and post wedding weekend. Continental breakfast is included, and there is no additional charge for parking. Reservations must be cancelled 14 days prior to arrival to avoid a penalty of one night’s room and tax. Rooms can be reserved by contacting Inn on the Alameda at <AccommodationPhone number="5059842121" />.
        </AccommodationDetails>
        <AccommodationLink url="https://www.innonthealameda.com/">Inn on the Alameda</AccommodationLink>
      </Accommodation>
      <Accommodation>
        <AccommodationTitle>Other Accommodations</AccommodationTitle>
        <ExtraAccommodations>
          <ExtraAccommodation
            link="http://www.elreycourt.com/"
            name="El Rey Court"
            details="Boutique hotel 3 miles from the Santa Fe Plaza"
          />
          <ExtraAccommodation
            link="https://www.santafesageinn.com/"
            name="Sage Inn"
            details="1 mile from the Santa Fe Plaza"
          />
        </ExtraAccommodations>
      </Accommodation>
      <Accommodation>
        <AccommodationTitle>Babysitters</AccommodationTitle>
        <AccommodationDetails>If you will be needing babysitters during your stay in Santa Fe, here is more information on a recommended agency:</AccommodationDetails>
        <a href="https://mailchi.mp/6e2728a22082/patty-cake-nannies-3-step-babysitting-placement-process-2706665?e=4ee2b5df5a">Brochure</a>
      </Accommodation>
      <Map />
    </div>
  );
};

export default Accommodations;
