import React from 'react';
import './Navbar.css';
import logo from '/src/assets/logo.jpg';

// React icons
import { FaWhatsapp, FaInstagram, FaXTwitter, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#">Register</a></li>
        <li><a href="#">Schedule</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="social-icons">
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>
    </nav>
  );
};

export default Navbar;