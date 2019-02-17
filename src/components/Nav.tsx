import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import Text from './Text';
import { ReactComponent as Hamburger } from '../assets/hamburger.svg';
import useMaxWindowWidth from '../hooks/useMaxWindowWidth';

const navItems = [
  { label: 'Home', link: '/', exact: true },
  { label: 'Accommodations', link: '/accommodations' },
  { label: 'Directions', link: '/directions' },
  { label: 'Photos', link: '/photos' },
  //{ label: 'Registry', link: '/registry' },
  //{ label: 'Wedding Activities', link: '/activities' },
  //{ label: 'Things To Do', link: '/thingstodo' },
];

const Nav = () => {
  const isSmallWidth = useMaxWindowWidth(900);
  const [smallNavOpen, setSmallNavOpen] = useState(false);

  if (!isSmallWidth && smallNavOpen) {
    setSmallNavOpen(false);
  }

  useEffect(() => {
    const handleClick = () => smallNavOpen && setSmallNavOpen(false);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });

  const listClassNames = classNames(styles.list, {
    [styles.listDropdown]: isSmallWidth,
  });

  return (
    <nav className={styles.Nav}>
      <div className={styles.container}>
        {isSmallWidth && (
          <button
            className={styles.hamburger}
            onClick={() => setSmallNavOpen(!smallNavOpen)}
          >
            <Hamburger />
          </button>
        )}
        <CSSTransition
          in={!isSmallWidth || smallNavOpen}
          classNames={{
            enter: styles.listDropdownEnter,
            enterActive: styles.listDropdownEnterActive,
            enterDone: styles.listDropdownEnterDone,
            exit: styles.listDropdownExit,
          }}
          timeout={200}
          mountOnEnter
          unmountOnExit
        >
          <ul className={listClassNames}>
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
        </CSSTransition>
        </div>
      </nav>
  );
}

export default Nav;
