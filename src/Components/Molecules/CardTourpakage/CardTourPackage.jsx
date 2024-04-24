import React from 'react';
import styles from './CardTourPackage.module.css';
import CardTourPackageData from '../../../data/CardTourPackage.json';

function CardTourPackage() {
  return (
    <div className={styles.displayCards__container}>
      {CardTourPackageData.map((data) => {
        return (
          <div className={styles.displayCards_items}>
            <div className={styles.displayCards_image_text} key={data.desc}>
              <img src={data.src} alt={data.title} />
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
            <button type="button">Learn More</button>
          </div>
        );
      })}
    </div>
  );
}

export default CardTourPackage;
