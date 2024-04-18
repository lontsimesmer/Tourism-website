import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import styles from './Carousel.module.css';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className={styles.Carousel__container}>
      <img src={images[currentIndex]} alt="carousel" key={currentIndex} />
      <AiOutlineLeftCircle
        className={styles.Left_slides}
        onClick={handlePrevious}
      />
      <AiOutlineRightCircle
        className={styles.Right_slides}
        onClick={handleNext}
      />
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
