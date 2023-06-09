import React from "react";
import{link, NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "../Form/Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>E-<span>MART</span></h3>
          <p className="footer-links">
            <NavLink to='/'>Home</NavLink>
            |
            <NavLink to='/about'>About</NavLink>
            |
            <NavLink to='/contact'>Contact</NavLink>
            |
            <NavLink to='/Policy'>Policy</NavLink> 
            
          </p>
          <p className="footer-company-name">Copyright © 2023  
            <strong>Eshoppers</strong> All rights reserved
          </p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" />
            <p><span>Pune</span>
              Maharashtra</p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p>+91 8010774827</p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <p><a href="mailto:sagar00001.co@gmail.com">suyashsshirtar2@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>Eshoppers</span>
            <strong>E-MART</strong> is a place where you can find the best Products with Great Deals and amazing offers!!
          </p>
          <div className="footer-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
