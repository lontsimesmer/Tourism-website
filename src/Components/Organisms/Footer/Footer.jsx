/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { IoSend } from 'react-icons/io5';
import styles from './Footer.module.css';
import logo from '../../../assets/images/NavBar-Logo.png';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles['container-left']}>
          <h1>If you have any question, Let us help you!</h1>
          <div className={styles.subtextcontainer}>
            <p>
              If you have any questions or would like to book a tour with us,
              please don't hesitate to contact us.
            </p>
            <ul>
              <li>Phone: +250 788 123 456</li>
              <li>
                Email:{' '}
                <a
                  href="http://"
                  style={{
                    color: '#fff',
                    opacity: 0.7,
                  }}
                >
                  info@rwandatourism.com
                </a>
              </li>
              <li>Address: Kigali, Rwanda</li>
            </ul>
          </div>
          <form>
            <label htmlFor="" className={styles.formLable}>
              Subscribe to our newspaper
            </label>
            <div className={styles.input__button}>
              <input
                type="text"
                placeholder="Input your email here"
                id="subscribe"
              />
              <span className={styles.sendButton} type="button">
                <IoSend className={styles.iosend} />
              </span>
            </div>
          </form>
        </div>
        <div className={styles['container-right']}>
          <div className={styles.Logo_icons}>
            <img src={logo} alt="logo" />
            <div className={styles.footer_icons_links}>
              <span className={styles.circles}>
                <BiLogoFacebook className="Bilogo" />
              </span>
              <span className={styles.circles}>
                <AiOutlineTwitter
                  className="Aioutline"
                  style={{ fontSize: 15 }}
                />
              </span>
              <span className={styles.circles}>
                <BiLogoLinkedin className="Bilogo" style={{ fontSize: 14 }} />
              </span>
              <span className={styles.circles}>
                <AiFillInstagram className="Aifill" style={{ fontSize: 16 }} />
              </span>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
          <div className={styles.footerMain__Links}>
            <div className={styles.footerLinks_columns}>
              <a href="http://">Home</a>
              <a href="http://">Testimonials</a>
              <a href="http://">Destinations</a>
              <a href="http://">Sign In</a>
            </div>
            <div className={styles.footerLinks_columns}>
              <a href="http://">About Us</a>
              <a href="http://">Packages</a>
              <a href="http://">Events</a>
              <a href="http://">Gallery</a>
            </div>
            <div className={styles.footerLinks_columns}>
              <a href="http://">Our Team</a>
              <a href="http://">Blog</a>
              <a href="http://">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.License}>
        <p>Copyright Africa Wizzy Safari 2022</p>
      </div>
    </div>
  );
}

export default Footer;
