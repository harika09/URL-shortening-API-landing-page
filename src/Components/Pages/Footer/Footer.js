import React from "react";
import footerLogo from "../../../Components/assets/images/footer-logo.svg";
import icon1 from '../../assets/images/icon-facebook.svg'
import icon2 from '../../assets/images/icon-twitter.svg'
import icon3 from '../../assets/images/icon-pinterest.svg'
import icon4 from '../../assets/images/icon-instagram.svg'
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content bd-container ">
        <div className="footer-logo">
          <img src={footerLogo} alt="footer-logo" />
        </div>

        <div className="footer-links">
          <div className="features">
            <span>Features</span>

            <ul className="list">
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="resources">
            <span>Resources</span>

            <ul className="list">
              <li>Blog</li>
              <li>Developer</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="company">
            <span>Company</span>

            <ul className="list">
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <div className="social-icons">
          <i className='bx bxl-facebook-square'></i>
          <i className='bx bxl-twitter' ></i>
          <i className='bx bxl-pinterest'></i>
          <i className='bx bxl-instagram' ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
