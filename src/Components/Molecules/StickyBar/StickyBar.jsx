import React from 'react';
import './StickyBar.modules.css';
import {
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
// import email from '../../../assets/images/group email.png';
// import phone from '../../../assets/images/group phone.png';

function StickyBar() {
  return (
    <div className="stickybar">
      <div className="Stickybar_Content">
        <div className="stickybar-info">
          <AiFillPhone className="Aifill" style={{ fontSize: 28 }} />
          <p className="icon-text">+250 784 688 641</p>
          <AiFillMail className="Aifill" style={{ fontSize: 28 }} />
          <p className="icon-text">bbonteemma@gmail.com</p>
        </div>
        <div className="stickybar-icons">
          <span className="circle">
            <BiLogoFacebook className="Bilogo" />
          </span>
          <span className="circle">
            <AiOutlineTwitter className="Aioutline" style={{ fontSize: 14 }} />
          </span>
          <span className="circle">
            <BiLogoLinkedin className="Bilogo" style={{ fontSize: 13 }} />
          </span>
          <span className="circle">
            <AiFillInstagram className="Aifill" style={{ fontSize: 15 }} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default StickyBar;
