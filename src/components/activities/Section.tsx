import React from 'react';

import Text from '../Text';
import style from './activities.module.css';

interface SectionProps {
  title: string
}

const Section: React.FunctionComponent<SectionProps> = ({ title, children }) => {
  return (
    <div className={style.Section}>
      <div className={style.sectionHeader}><Text fancy>{title}</Text></div>
      <div>{children}</div>
    </div>
  );
}

export default Section;
