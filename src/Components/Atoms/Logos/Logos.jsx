import React from 'react';
import {
  AiOutlineCar,
  AiOutlineCheckCircle,
  AiOutlineLike,
} from 'react-icons/ai';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import styles from './Logos.module.css';

function Logos() {
  return (
    <div className={styles.Logo__wrapper}>
      <div className={styles.Logo_container}>
        <AiOutlineCar className={styles.Aioutline} />
        <div className={styles.Logo_text}>100+ tours around Rwanda</div>
      </div>
      <div className={styles.Logo_container}>
        <AiOutlineCheckCircle className={styles.Aioutline} />
        <div className={styles.Logo_text}>100% Trusted travel agency</div>
      </div>
      <div className={styles.Logo_container}>
        <MdOutlinePermContactCalendar style={{ color: '#fff', fontSize: 50 }} />
        <div className={styles.Logo_text}>10 years of travel experience</div>
      </div>
      <div className={styles.Logo_container}>
        <AiOutlineLike className={styles.Aioutline} />
        <div className={styles.Logo_text}>90% of travelers are happy</div>
      </div>
    </div>
  );
}

export default Logos;
