import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import Text from './Text';
import { ReactComponent as Hamburger } from '../assets/hamburger.svg';

const navItems = [
  { label: 'Home', link: '/', exact: true },
  { label: 'Accommodations', link: '/accommodations' },
  { label: 'Directions', link: '/directions' },
  //{ label: 'Registry', link: '/registry' },
  //{ label: 'Wedding Activities', link: '/activities' },
  //{ label: 'Things To Do', link: '/thingstodo' },
];

const Nav = () => (
  <nav className={styles.Nav}>
    <div className={styles.container}>
      <button className={styles.hamburger}><Hamburger /></button>
      <ul className={styles.list}>
        {navItems.map(i => (
          <li key={i.label} className={styles.item}>
          <NavLink
            to={i.link}
            exact={i.exact}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
              <Text size="small" fancy>{i.label}</Text>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Nav;