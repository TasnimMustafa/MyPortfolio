import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {GrFacebook} from 'react-icons/gr';

const Footer = () => {
  return (
    <div>
      <footer id='footer'>
        <a href="#" className='footer_logo'>TASNIM ELSHAMIA</a>
        <ul className='footer_links'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div className="footer_socials">
        <a href="https://www.linkedin.com/in/tasneem-moustafa-3740461b7" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/TasnimMustafa" target='_blank'><FaGithub/></a>
        <a href="https://www.facebook.com/tasneem688" target='_blank'><GrFacebook/></a>
        </div>
        

        <div className="footer_copyrights">
          <small>&copy; <a href='https://www.linkedin.com/in/tasneem-moustafa-3740461b7' target='_blank'>TASNEEM M. Elshamia</a> All Right Reserved.</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer