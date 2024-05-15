/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './ContactUs.module.css';
import NavBar from '../../Components/Organisms/NavBar/NavBar';
import StickyBar from '../../Components/Molecules/StickyBar/StickyBar';
import LandingImage from '../../Components/Molecules/LandingImage/LandingImage';
import Footer from '../../Components/Organisms/Footer/Footer';
import ContactCard from '../../Components/Atoms/ContactCard/ContactCard';
import FormComponent from '../../Components/Molecules/Form/FormComponent';

function ContactUs() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <LandingImage title="Contact Us" />
      <div className={styles.text__containter}>
        <h1>Get in Touch</h1>
        <p>
          We would love to hear from you! If you have any comments or
          suggestions about our website or our tours, please don't hesitate to
          get in touch. We are always looking for ways to improve and make your
          travel experience even better.
        </p>
      </div>
      <FormComponent />
      <ContactCard />
      <Footer />
    </div>
  );
}

export default ContactUs;
