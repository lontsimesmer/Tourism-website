/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Buttons from '../../Atoms/Button/Buttons';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.About__Menu}>
      <div className={styles.Menu_options_container}>
        <div className={styles.Select_options}>
          <label htmlFor="guestSelect">Guests</label>
          <div className={styles.Option_content}>
            <option className={styles.options}>2 Adult</option>
            <FaChevronDown className={styles.Fichevron} />
          </div>
        </div>
        <div className={styles.Select_options}>
          <label htmlFor="dateSelect">Date</label>
          <div className={styles.Option_content}>
            <option className={styles.options}>12 - 13 April 2021</option>
            <FaChevronDown className={styles.Fichevron} />
          </div>
        </div>
        <div className={styles.Select_options}>
          <label htmlFor="pakageSelect">Package</label>
          <div className={styles.Option_content}>
            <option className={styles.options}>Akagera Tour</option>
            <FaChevronDown className={styles.Fichevron} />
          </div>
        </div>
      </div>
      <div className={styles.Menu_button}>
        <Buttons title="Book Now" color="#304F47" />
      </div>
    </div>
  );
}

export default Menu;
