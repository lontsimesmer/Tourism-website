/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../../assets/images/NavBar-Logo.png';
import Buttons from '../../Atoms/Button/Buttons';

function Menu({ children }) {
  return (
    <ul>
      {children}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/tourpackage">Tour Package</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>
    </ul>
  );
}

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__container}>
        <img src={logo} alt="logo" />
        <div className={styles.Navbar_links}>
          <Menu />
        </div>
      </div>
      <div className={styles.Navbar__search}>
        <ImSearch className={styles.loop} />
        <div className={styles.Navbar_button}>
          <Buttons title="Sign In" color="#C7923E" />
        </div>
      </div>
      <div className={styles.Navbar__menu}>
        {toggle ? (
          <RiCloseLine
            style={{
              color: '#000',
              fontSize: 50,
              marginTop: 50,
            }}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line
            style={{ color: '#304f47', fontSize: 50, marginTop: 50 }}
            onClick={() => setToggle(true)}
          />
        )}
        {toggle && (
          <Menu>
            <div className={styles.Navbar_menu_content}>
              <button className={styles.register} type="submit">
                Sign In
              </button>
              <RiCloseLine
                style={{
                  color: '#000',
                  fontSize: 50,
                  left: '5%',
                  marginTop: 5,
                  position: 'relative',
                }}
                onClick={() => setToggle(false)}
              />
            </div>
          </Menu>
        )}
      </div>
    </div>
  );
}

export default NavBar;
