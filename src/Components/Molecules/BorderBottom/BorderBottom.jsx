/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import Buttons from '../../Atoms/Button/Buttons';
import styles from './BorderBottom.module.css';

function BorderBottom() {
  return (
    <div className={styles.Border__bottom}>
      <div className={styles.Border_button_input}>
        <input type="text" placeholder="Search activities or Destinations" />
        <HiSearch
          className={styles.Hisearch}
          style={{ cursor: 'pointer', fontSize: 24 }}
        />
      </div>
      <div className={styles.Border_bottom_options}>
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
            <option className={styles.options}>All</option>
            <FaChevronDown className={styles.Fichevron} />
          </div>
        </div>
      </div>
      <div className={styles.BorderBottom_button}>
        <Buttons title="Book Now" color="#C7923E" />
      </div>
    </div>
  );
}

export default BorderBottom;
