import React from 'react';
import styles from './Gallery.module.css';
import LandingImage from '../../Components/Molecules/LandingImage/LandingImage';
import StickyBar from '../../Components/Molecules/StickyBar/StickyBar';
import ImageGallery from '../../Components/Organisms/ImageGallery/ImageGallery';
import Footer from '../../Components/Organisms/Footer/Footer';
import AboutNav from '../../Components/Organisms/NavBar/NavBar';

function Gallery() {
  return (
    <div className={styles.GalleryStyles}>
      <StickyBar />
      <AboutNav />
      <LandingImage title="Gallery" />
      <div className={styles.buttonSpaced}>
        <button type="submit" className={styles.instagramButton}>
          Open Instagram
        </button>
      </div>
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default Gallery;
