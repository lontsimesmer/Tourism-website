import React from 'react';
import './StickyBar.modules.css';
import {
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
// import facebookIcon from '../../../assets/images/facebook.png';
// import twitterIcon from '../../../assets/images/twitter.png';
// import linkedInIcon from '../../../assets/images/LinkedIn.png';
// import instagramIcon from '../../../assets/images/Instagram.png';
// import email from '../../../assets/images/group email.png';
// import phone from '../../../assets/images/group phone.png';

function StickyBar() {
  return (
    <div className="stickybar">
      <div className="Stickybar_Content">
        <div className="stickybar-info">
          <AiFillPhone className="aifill" style={{ fontSize: 28 }} />
          <p className="icon-text">+250 784 688 641</p>
          <AiFillMail className="aifill" style={{ fontSize: 28 }} />
          <p className="icon-text">bbonteemma@gmail.com</p>
        </div>
        <div className="stickybar-icons">
          {/* <img src={facebookIcon} alt="facebook" /> */}
          <span className="circle">
            <BiLogoFacebook className="bilogo" />
          </span>
          <span className="circle">
            <AiOutlineTwitter className="aioutline" style={{ fontSize: 14 }} />
          </span>
          <span className="circle">
            <BiLogoLinkedin className="bilogo" style={{ fontSize: 13 }} />
          </span>
          <span className="circle">
            <AiFillInstagram className="aifill" style={{ fontSize: 15 }} />
          </span>
          {/* <img src={linkedInIcon} alt="linkedIn" />
        <img src={instagramIcon} alt="instagram" /> */}
        </div>
      </div>
    </div>
  );
}

export default StickyBar;
