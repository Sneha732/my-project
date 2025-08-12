import React from "react";
import "./Footer.css";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <span className="logo-text">logo</span>
          </div>
          <p className="footer-desc">
            Play lots of games here and <br /> subscribe right away
          </p>
          <div className="footer-social"></div>
        </div>

        <div className="footer-col">
          <h4>Articles</h4>
          <ul>
            <li>
              <a href="#">Crowdfunding</a>
            </li>
            <li>
              <a href="#">Website Donations</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Event Registrations</a>
            </li>
            <li>
              <a href="#">Newsrooms</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Leagues</h4>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Community Driven</a>
            </li>
            <li>
              <a href="#">Our Customer</a>
            </li>
            <li>
              <a href="#">Expert Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Team</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy and Policy</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get In Touch</h4>
          <p>(704) 555-0217</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
