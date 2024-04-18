import React from 'react';
import styles from './Hero.module.css';
import Carousel from '../../Carousel/Carousel';

const images = [
  'https://selectadventuresafari.com/wp-content/uploads/2021/02/lake-kivu-rwanda.jpg',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/62/1a/83/caption.jpg?w=1200&h=-1&s=1',
  'https://rwandaecocompany.com/wp-content/uploads/2022/05/boat-at-lake-kivu.jpg',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/dc/3a/eb/mountain-gorilla-naming.jpg?w=700&h=500&s=1',
  'https://cdn.rhinoafrica.com/tmp/image-thumbnails/media/_en/destinations/root/africa/east-africa/rwanda/lake-kivu/_img/image-thumb__4846__background-cover/lake-kivu-rwanda-jpg.jpg',
];

function Hero() {
  return (
    <div>
      <Carousel images={images} />
      <div className={styles.Hero__title}>
        <h1>Experience the beauty of Rwanda with us</h1>
        <p>Discover the Land of a Thousand Hills</p>
      </div>
    </div>
  );
}

export default Hero;
