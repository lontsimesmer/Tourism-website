import React from 'react';
import LandingImage from '../../Components/Molecules/LandingImage/LandingImage';
import NavBar from '../../Components/Organisms/NavBar/NavBar';
import StickyBar from '../../Components/Molecules/StickyBar/StickyBar';
import CardTourPackage from '../../Components/Molecules/CardTourpakage/CardTourPackage';
import SliderButton from '../../Components/Molecules/SliderButtons/SliderButton';
import Footer from '../../Components/Organisms/Footer/Footer';

function TourPackage() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <LandingImage title="Tour Package" />
      <CardTourPackage />
      <SliderButton />
      <Footer />
    </div>
  );
}

export default TourPackage;
