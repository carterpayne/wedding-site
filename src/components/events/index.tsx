import React from 'react';
import PageTitle from '../PageTitle';
import Text from '../Text';

import Section from '../activities/Section';

const Events = () => {
  return (
    <div>
      <PageTitle>Weekend Events</PageTitle>
      <Section title="Friday, June 21st">
        <div>
          <div>
            <Text size="smedium">7 pm | Rehersal Dinner @ Rio Chama</Text>
          </div>
          <div>
            <Text size="small">414 Old Santa Fe Trail</Text>
          </div>
          <div style={{ margin: '8px 0' }}>
            Directions: If you are staying at La Fonda or Inn on the Alameda, the restaurant is within walking distance. For those who are driving, there is parking behind the restaurant or across the street.
          </div>
        </div>
      </Section>
      <Section title="Saturday, June 22nd">
        <div>
          <div>
            <Text size="smedium">9 am | Santa Fe Farmer's Market</Text>
          </div>
          <div>
            <Text size="small">1607 Paseo De Peralta</Text>
          </div>
          <div style={{ margin: '8px 0' }}>
              If you are in town Saturday morning, join us at the Farmer’s Market! Open from 7:00 am until 1:00 pm, the market offers delicious locally-grown fruits and vegetables, along with baked goods, jams, jellies, flowers and more. We love the breakfast burritos and lavender cake donuts! The market is located at the Railyard and there is parking available in the garage (driving entrance / exit is between REI and the Sanbusco Center).
          </div>
        </div>
        <div>
          <div>
            <Text size="smedium">6:30 pm | Wedding Ceremony and Reception @ La Fonda on the Plaza</Text>
          </div>
          <div>
            <Text size="small">100 E. San Francisco Street</Text>
          </div>
          <div style={{ margin: '8px 0' }}>
              The ceremony will take place outside on La Terraza, followed by cocktails, dinner, and dancing. the ceremony will begin right at 6:30. Sunscreen and sunglasses are encouraged. Bring your dancing shoes!
          </div>
        </div>
      </Section>
      <Section title="Sunday, June 23rd">
        <div>
          <div>
            <Text size="smedium">9 - 10:30 am | Farewell Brunch @ La Fonda on the Plaza</Text>
          </div>
          <div style={{ margin: '8px 0' }}>
              Hosted By: Peggy and David Ater, Alan & Gail Schwartz, Stuart & Shari Schwartz, Dick & Brenda Snow and Liz & Mike Weigand
          </div>
          <div style={{ margin: '8px 0' }}>
              Join us for a bite to eat and farewell hug back on La Terraza before we head off for our honeymoon to Kauai!
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Events;
