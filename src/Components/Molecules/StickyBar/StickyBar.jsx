import React from 'react';
import './StickyBar.modules.css';
import { AiFillMail, AiFillPhone, AiOutlineTwitter } from 'react-icons/ai';
import facebookIcon from '../../../assets/images/facebook.png';
// import twitterIcon from '../../../assets/images/twitter.png';
import linkedInIcon from '../../../assets/images/LinkedIn.png';
import instagramIcon from '../../../assets/images/Instagram.png';
// import email from '../../../assets/images/group email.png';
// import phone from '../../../assets/images/group phone.png';

function StickyBar() {
  return (
    <div className="stickybar">
      <div className="stickybar-info">
        <AiFillPhone className="icon" />
        <p className="icon-text">+250 784 688 641</p>
        <AiFillMail className="icon" />
        <p className="icon-text">bbonteemma@gmail.com</p>
      </div>
      <div className="stickybar-icons">
        <img src={facebookIcon} alt="facebook" />
        <AiOutlineTwitter className="icons" />
        <img src={linkedInIcon} alt="linkedIn" />
        <img src={instagramIcon} alt="instagram" />
      </div>
    </div>
  );
}

export default StickyBar;
