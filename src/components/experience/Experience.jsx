import React, { useEffect } from 'react';
import './experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
      <section id='experience'>
        <h5 className='section_title'>What Skills I Have</h5>
        <h2 style={{marginBottom: "5rem"}}>My Experience</h2>

      <div className="skills container row align-items-center">
      {/* data-aos="fade-right" data-aos-offset="50"
      data-aos-easing="ease" data-aos-duration="1000" */}
        <div className="left col-md-6 col-12">
        <span>HTML</span>

        <div class="progress mb-4" style={{backgroundColor:"var(--color-bg-varient)"}}>
          <div data-aos="fade-right" data-aos-duration="2000" class="progress-bar bg-success" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span>CSS</span>

        <div class="progress mb-4" style={{backgroundColor:"var(--color-bg-varient)"}}>

          <div data-aos="fade-right" data-aos-duration="2000" class="progress-bar bg-info" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span>Bootstrap</span>

        <div class="progress mb-4" style={{backgroundColor:"var(--color-bg-varient)"}}>

          <div  data-aos="fade-right" data-aos-duration="2000" class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span>JavaScript</span>

        <div class="progress mb-4" style={{backgroundColor:"var(--color-bg-varient)"}}>

          <div data-aos="fade-right" data-aos-duration="2000" class="progress-bar bg-danger" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </div>

        <div className="right col-md-6 col-12">
        <span>Reactjs</span>

      <div class="progress mb-4" style={{backgroundColor:"var(--color-bg-varient)"}}>
        <div data-aos="fade-right" data-aos-duration="2000" class="progress-bar bg-success" role="progressbar" style={{width: "68%"}} aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <span>PHP</span>

      <div class="progress mb-4" style={{backgroundColor:"var(--color-bg-varient)"}}>

        <div data-aos="fade-right" data-aos-duration="2000" class="progress-bar bg-primary" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <span>Laravel</span>

      <div class="progress mb-4" style={{backgroundColor:"var(--color-bg-varient)"}}>

        <div data-aos="fade-right" data-aos-duration="2000" class="progress-bar bg-danger" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <span>MySql</span>

      <div class="progress mb-4" style={{backgroundColor:"var(--color-bg-varient)"}}>

        <div data-aos="fade-right" data-aos-duration="2000" class="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
        </div>
      </div>


      </section>
  )
}

export default Experience;