import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {GrFacebook} from 'react-icons/gr';

const Headersocials = () => {
  return (
    <>
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/tasneem-moustafa-3740461b7"><BsLinkedin/></a>
        <a href="https://github.com/TasnimMustafa" ><FaGithub/></a>
        <a href="https://www.facebook.com/tasneem688" ><GrFacebook/></a>
    </div>
    </>
  )
}

export default Headersocials