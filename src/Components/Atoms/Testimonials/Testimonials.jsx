import React from 'react';
import styles from './Testimonials.module.css';
import Emma from '../../../assets/images/Emma.png';
import workersData from '../../../data/WorkersData.json';

function Testimonials() {
  return (
    <div className={styles.Profiles__container}>
      <div className={styles.Profiles_wrapper}>
        {workersData.map((data) => {
          return (
            <div className={styles.Profiles_image_text} key={data.id}>
              <img src={Emma} alt="username" />
              <div className={styles.Profiles_text}>
                <h3>{data.name}</h3>
                <p>{data.about}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.Profile__tiles}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default Testimonials;
