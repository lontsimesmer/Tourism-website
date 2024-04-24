import React from 'react';
import Header from '../../Components/Atoms/Header/Header';
import LandingImage from '../../Components/Molecules/LandingImage/LandingImage';
import NavBar from '../../Components/Organisms/NavBar/NavBar';
import StickyBar from '../../Components/Molecules/StickyBar/StickyBar';
import CardTourpakage from '../../Components/Molecules/CardTourpakage/CardTourPackage';
import SliderButton from '../../Components/Molecules/SliderButtons/SliderButton';
import Footer from '../../Components/Organisms/Footer/Footer';

function TourPackage() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <LandingImage title="Tour Package" />
      <Header
        title="Choose your Package"
        subtitle="Select your Best Package for your Travel"
      />
      <CardTourpakage />
      <SliderButton />
      <Footer />
    </div>
  );
}

export default TourPackage;
