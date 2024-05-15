import React from 'react';
import './ContactCard.css';
import {
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';

function ContactCard() {
  return (
    <div className="tourismSite__contactCard">
      <div className="contactCard">
        <h3>Social Media</h3>
        <div className="contactCard_social-media">
          <span className="circles">
            <BiLogoFacebook />
          </span>
          <span className="circles">
            <AiFillInstagram />
          </span>
          <span className="circles">
            <AiOutlineTwitter />
          </span>
          <span className="circles">
            <BiLogoLinkedin />
          </span>
        </div>
      </div>
      <div className="contactCard">
        <h3>Email & Phone</h3>
        <div className="contactCard_email-phone">
          <div className="email-phone">
            <AiFillPhone className="aifill" />
            <p>+250 784 688 641</p>
          </div>
          <div className="email-phone">
            <AiFillMail className="aifill" />
            <p>bbonteemma@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contactCard">
        <h3>Address</h3>
        <div className="contactCard_address">
          <p>kk 600 st</p>
          <p>Kigali, Rwanda</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
