import React from 'react';
import PageTitle from '../PageTitle';
import Photo from './Photo';
import styles from './photos.module.css';

import seventies from '../../assets/photos/70s.jpg';
import accadiaMt from '../../assets/photos/accadia_mt.jpg';
import accadiaShore from '../../assets/photos/accadia_shore.jpg';
import acl from '../../assets/photos/acl.jpg';
import campGym from '../../assets/photos/camp_gym.jpg';
import camp from '../../assets/photos/camp.jpg';
import campMessHall from '../../assets/photos/camp_mess_hall.jpg';
import christmakah from '../../assets/photos/christmakah.jpg';
import familyPhoto from '../../assets/photos/family_photo.jpg';
import jeffHaleyRehDin from '../../assets/photos/jeff_haley_reh_din.jpg';
import joeTs from '../../assets/photos/joe_ts.jpg';
import kilt from '../../assets/photos/kilt.jpg';
import mayraWedding from '../../assets/photos/mayra_wedding.jpg';
import melAlexWedding from '../../assets/photos/mel_alex_wedding.jpg';
import newport from '../../assets/photos/newport.jpg';
import proposal from '../../assets/photos/proposal.jpg';
import rangersGame from '../../assets/photos/rangers_game.jpg';
import rubyKisses from '../../assets/photos/ruby_kisses.jpg';
import rubyPuppy from '../../assets/photos/ruby_puppy.jpg';
import scotland from '../../assets/photos/scotland.jpg';
import utGame from '../../assets/photos/ut_game.jpg';

const Photos = () => {
  return (
    <div className={styles.Photos}>
      <PageTitle>Photos</PageTitle>
      <div className={styles.container}>
        <Photo src={acl} landscape />
        <Photo src={proposal} />
        <Photo src={seventies} />
        <Photo src={utGame} />
        <Photo src={scotland} />
        <Photo src={rubyKisses} landscape />
        <Photo src={rangersGame} />
        <Photo src={christmakah} />
        <Photo src={mayraWedding} />
        <Photo src={joeTs} />
        <Photo src={jeffHaleyRehDin} />
        <Photo src={kilt} />
        <Photo src={newport} />
        <Photo src={accadiaMt} />
        <Photo src={accadiaShore} landscape />
        <Photo src={campMessHall} />
        <Photo src={familyPhoto} />
        <Photo src={rubyPuppy} />
        <Photo src={campGym} />
        <Photo src={melAlexWedding} />
        <Photo src={camp} landscape />
      </div>
    </div>
  );
};

export default Photos;

