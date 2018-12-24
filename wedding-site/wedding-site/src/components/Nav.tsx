import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import Text from './Text';

const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Accommodations', link: 'accommodations' },
  { label: 'Directions', link: 'directions' },
  { label: 'Registry', link: 'registry' },
  { label: 'Wedding Activities', link: 'activities' },
  { label: 'Things To Do', link: 'thingstodo' },
];

const Nav = () => (
  <nav className={styles.Nav}>
    <ul className={styles.list}>
      {navItems.map(i => (
        <li key={i.label} className={styles.item}>
        <NavLink
          to={i.link}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
            <Text size="small" fancy fixed>{i.label}</Text>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
