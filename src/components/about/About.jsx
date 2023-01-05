import React, { useEffect } from 'react';
import './About.css';
import ME from '../../assets/InShot_20210925_203128874.jpg';
import AOS from 'aos';
// import 'aos/dist/aos.css';

const About = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
      <section id='about'>
        <h5 className='section_title'>Who I am</h5>
        <h2 className='' style={{marginBottom: "5rem"}}>About Me</h2>

        <div className="container about_container">
          <div className="about_me" data-aos="zoom-in-right" data-aos-duration="1000">
            <div className="about_me-image">
              <img src={ME} alt="" />
            </div>

          </div>
          <div className="about_content" data-aos="fade-left" data-aos-duration="1000">
            <p>My name is Tasneem Mustafa Elshamia, Egyptian, Muslim. I'm 24 years old. I obtained my Bachelor’s degree in 2021 with a GPA: 3.76 in Computer Engineering from the Faculty of Engineering, Mansoura University.</p>
            <a href='#contact' className='btnn btn-prim'>Let's Talk</a>

          </div>
        </div>
      </section>
  )
}

export default About