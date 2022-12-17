import React from 'react';
import { FiGithub , FiLinkedin } from 'react-icons/fi';
import { SiSololearn } from 'react-icons/si';
import {GoLocation} from 'react-icons/go';
import {TiMessages} from 'react-icons/ti'
import {FaCalendarAlt} from 'react-icons/fa';
import {BsMusicPlayer} from 'react-icons/bs';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import {Link} from 'react-router-dom';
import ContactForm from './contactFrom/ContactForm';

//  import Chat from './components/chat/Message'

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans"> Armenia, Yerevan,<br /> Tigran Petrosyan 5</p>
        <p className="p__opensans">+374 44-44-44</p>
        <p className="p__opensans">+374 77-77-77</p>
     </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://github.com/Hasul79"><FiGithub  /> </a>
          <a href="https://www.linkedin.com/in/hasmik-minasyan-1266b5ab/"><FiLinkedin /></a>
          <a href="https://www.sololearn.com/profile/24593720"><SiSololearn /></a>
          <a href="https://goo.gl/maps/hmmWRbDtJ5UdRWo76"><GoLocation /></a>
          <a href=" https://hasul79.github.io/Music-Player/" target="_blank"><BsMusicPlayer /></a>
          <Link to="/chat"><TiMessages /></Link>   
          <Link to="/calendar"><FaCalendarAlt /></Link>            
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p style={{color: '#DCCA87'}} className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 pm</p>
        <p style={{color: '#DCCA87'}} className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

 <ContactForm />

    <div className="footer__copyright">
      <p className="p__opensans">2022  All Rights reserved. </p>
      <p className="p__sans">  Hasmik Minasyan.</p>
    </div>

  </div>
);

export default Footer;
