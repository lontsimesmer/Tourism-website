import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SliderData from '../../../data/SliderData.json';
import styles from './Slider.module.css';

function Slider() {
  return (
    <div className={styles.Slider__container}>
      <div className={styles.Slider_button}>
        <button type="button">
          <BsChevronLeft style={{ fontSize: 24 }} />
        </button>
        <button type="button">
          <BsChevronRight style={{ fontSize: 24 }} />
        </button>
      </div>
      <div className={styles.Slider__wrapper}>
        {SliderData.map((data) => {
          return (
            <div className={styles.Slider_items} key={data.id}>
              <div className={styles.Slider_image_text}>
                <img src={data.scr} alt={data.title} />
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
