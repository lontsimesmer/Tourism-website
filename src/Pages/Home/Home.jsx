import React from 'react';
import Footer from '../../Components/Organisms/Footer/Footer';
import Header from '../../Components/Atoms/Header/Header';
import NavBar from '../../Components/Organisms/NavBar/NavBar';
import StickyBar from '../../Components/Molecules/StickyBar/StickyBar';
import BorderBottom from '../../Components/Molecules/BorderBottom/BorderBottom';
import Logos from '../../Components/Atoms/Logos/Logos';
import Hero from '../../Components/Molecules/Hero/Hero';
import Testimonials from '../../Components/Atoms/Testimonials/Testimonials';
import Slider from '../../Components/Molecules/Slider/Slider';
import Card from '../../Components/Atoms/Cards/Card';
import './Home.css';

function Home() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <Hero />
      <BorderBottom />
      <Header
        title="Choose your Package"
        subtitle="Select your Best Package for your Travel"
      />
      <Card />
      <Header
        title="Popular Destinations"
        subtitle="Select Our Best Popular Destinations"
      />
      <Slider />
      <Header title="Why us?" subtitle="Why Travel with Africa wizzy Safari" />
      <Logos />
      <div className="tourism-site__Home__header-container">
        <h2>Our Traveller Say</h2>
        <h1>What our clients say about us</h1>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
