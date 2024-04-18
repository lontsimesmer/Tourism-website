import React from 'react';
import styles from './Card.module.css';
import CardData from '../../../data/CardData.json';

function Card() {
  return (
    <div className={styles.displayCards__container}>
      {CardData.map((data) => {
        return (
          <div className={styles.displayCards_items} key={data.id}>
            <div className={styles.displayCards_image_text}>
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

export default Card;
