import React from 'react';

import PageTitle from '../PageTitle';
import Text from '../Text';
import styles from './activities.module.css';

import Section from './Section';
import { ReactComponent as Egg } from '../../assets/egg.svg';

const Activities = () => {
  return (
    <div className={styles.Activities}>
      <PageTitle>Local Activities</PageTitle>
      <Section title="EAT">
        <div>
          <div className={styles.mealTitle}>
            <Text size="smedium">Breakfast</Text>
          </div>
          <div>
            <ul style={{ marginTop: '8px' }}>
              <li>La Plazuela At La Fonda (100 E San Francisco Street)</li>
              <li>Café Pasquals (121 Don Gaspar Avenue)</li>
              <li>Santa Fe Farmer’s Market (1607 Paseo de Peralta)</li>
            </ul>
          </div>
        </div>
        <div className={styles.meal}>
          <div>
            <Text size="smedium">Lunch</Text>
          </div>
          <div>
            <ul style={{ marginTop: '8px' }}>
              <li>The Shed (113 ½ E. Palace Avenue)</li>
              <li>Mucho Gusto (839 Paseo de Peralta #H)</li>
              <li>Vinaigrette (709 Don Cubero Alley)</li>
              <li>La Choza (905 Alarid Street)</li>
              <li>Clafoutis (333 W. Cordova Road)</li>
              <li>The Teahouse (821 Canyon Road)</li>
            </ul>
          </div>
        </div>
        <div className={styles.meal}>
          <div>
            <Text size="smedium">Dinner</Text>
          </div>
          <div>
            <ul style={{ marginTop: '8px' }}>
              <li>Andiamo (322 Garfield Street)</li>
              <li>Santacafé (231 Washington Avenue)</li>
              <li>La Boca (72 W. Marcy Street)</li>
              <li>Paloma (401 S Guadalupe Street)</li>
              <li>The Compound (653 Canyon Road #A)</li>
              <li>El Farol (808 Canyon Road)</li>
              <li>Trattoria a Mano (227 Galisteo Street)</li>
              <li>Geronimo (724 Canyon Road)</li>
              <li>Rooftop Pizzeria (60 E. San Francisco Street)</li>
              <li>Restaurant Martin (526 Galisteo Street)</li>
            </ul>
          </div>
        </div>
        <div className={styles.meal}>
          <div>
            <Text size="smedium">Bars</Text>
          </div>
          <div>
            <ul style={{ marginTop: '8px' }}>
              <li>La Reina (1862 Cerrillos Road)</li>
              <li>Rio Chama (414 Old Santa Fe Trail)</li>
              <li>The Pink Adobe (406 Old Santa Fe Trail)</li>
              <li>Coyote Café (132 West Water Street)</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section title="EXPLORE">
        <div>
          <div>
            <Text size="smedium">Hiking</Text>
          </div>
          <div style={{ paddingLeft: '30px' }}>
               <p>
                 Santa Fe has many wonderful hiking trails. Notable day-hikes include the Dale Ball Trails, Aspen Vista Trail, Atalaya Mountain Trail, and the Nature Conservancy Trail. See more information about finding trailheads <a href="https://santafe.org/Visiting_Santa_Fe/Things_to_Do/Hiking/index.html" target="_blank" rel="noopener noreferrer">here</a>. For wonderful hiking outside of town, check out Tent Rocks National Monument (about an hour’s drive from the Plaza).
               </p>
          </div>
        </div>
        <div>
          <div>
            <Text size="smedium">Santa Fe Farmer's Market</Text>
          </div>
          <div style={{ paddingLeft: '30px' }}>
              <p>
                If you're in town Saturday morning, check out the Farmer's Market! Openfrom 7:00 am - noon, the market offers delicious locally grown fruits and vegetables, along with baked goods, jams, jellies, flowers, and more. The Market is located at the Railyard (1607 Paseo de Peralta).
              </p>
          </div>
        </div>
          <div>
            <div>
              <Text size="smedium">Golf</Text>
            </div>
            <div>
              <ul style={{ marginTop: '8px' }}>
                <li><a target="_blank" rel="noopener noreferrer" href="http://www.linksdesantafe.com/">Marty Sanchez Links de Santa Fe</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://www.cochitigolfclub.com">Cochiti</a> (about a 45-minute drive from the Plaza)</li>
              </ul>
            </div>
          </div>
      </Section>
      <Section title="GET CULTURED">
        <div>
          <Text size="smedium">Canyon Road</Text>
          <div style={{ paddingLeft: '30px' }}>
              <p>
                Once a Native American trail, now lined with eclectic studios, galleries, shops and restaurants.
              </p>
          </div>
        </div>
        <div>
          <Text size="smedium">Santa Fe Plaza</Text>
          <div style={{ paddingLeft: '30px' }}>
              <p>
                The heart of Santa Fe, the Plaza is lined with shops, restaurants, and art galleries.
              </p>
          </div>
        </div>
        <div>
          <Text size="smedium">Museums</Text>
          <div style={{ paddingLeft: '30px' }}>
            <p>Santa Fe is filled with wonderful art and history museums. Within walking distance of the Plaza are the <b>Museum of New Mexico</b> on Palace Avenue and the <b>New Mexico History Museum</b> on Lincoln Avenue. Nearby is the <b>Palace of the Governors</b> on the Plaza and the <b>Georgia O’Keeffe Museum</b> on Johnson Street.</p>
            <p><b>Meow Wolf</b> at 1352 Rufina off Cerrillos Road is an immersive art experience that is best seen in person.</p>
            <p>
                On “Museum Hill”, off Old Santa Fe Trail about a mile east of the Plaza, you can visit the <b>International Folk Art Museum</b> and the <b>Indian Arts Museum</b>. Close by are the <b>Wheelwright Museum of Indian Arts</b> and the <b>Spanish Colonial Arts Museum</b>.
            </p>
            <p>
                Each of the museums has excellent gift shops filled with New Mexican jewelry, pottery, art, and more. For those with young children, <b>The Children’s Museum</b> at 1050 Old Pecos Trail is a fun place to spend a couple of hours.
            </p>
          </div>
        </div>
      </Section>
      <Section title="RELAX">
        <div>
          <Text size="smedium">Ten Thousand Waves</Text>
        </div>
        <div style={{ paddingLeft: '30px' }}>
          <p>
              Ten Thousand Waves (Hyde Park Road), in the foothills of Santa Fe, is a spa modeled after the great hot spring resorts of Japan. Treatments include massage, skincare, outdoor hot baths, saunas, and cold plunges. You must book in advance at their <a href="https://tenthousandwaves.com/" rel="noopener noreferrer" target="_blank">website</a>.
          </p>
        </div>
        <div>
          <Text size="smedium">Body of Santa Fe</Text>
        </div>
        <div style={{ paddingLeft: '30px' }}>
          <p>
              Body (333 West Cordova Road) is a great spot for massages, facials, and other treatments, as well as yoga classes. Book any treatments in advance.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Activities;
