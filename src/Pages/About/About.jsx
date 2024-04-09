import React from 'react';
import './About.css';
import StickyBar from '../../Components/Molecules/StickyBar/StickyBar';
import MainAboutPage from '../../Components/Organisms/MainAboutPage/MainAboutPage';
import AboutContent from '../../Components/Organisms/AboutContent/AboutContent';
import Footer from '../../Components/Organisms/Footer/Footer';
import NavBar from '../../Components/Organisms/NavBar/NavBar';
import Menu from '../../Components/Molecules/AboutBorderBottom/AboutMenu';

function About() {
  return (
    <div className="tourism__aboutContainer">
      <StickyBar />
      <NavBar />
      <MainAboutPage />
      <Menu />
      <h1 className="tourism-site__header-text">
        Welcome to Africa Wizzy Safari <hr />
      </h1>
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
