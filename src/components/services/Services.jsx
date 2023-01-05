import React from 'react';
import './services.css';
import {BsCodeSlash} from 'react-icons/bs';
import {BiCodeCurly} from 'react-icons/bi';
import {FaCodeBranch} from 'react-icons/fa';


const Services = () => {
  return (
      <section id='services'>
        <h5 className='section_title'>What I Offer</h5>
        <h2 style={{marginBottom: "5rem"}}>Services</h2>
        <div className="container services_container">
          <div className="row justify-content-between">
            <div className="service col-lg-3 col-12 text-center mb-5" style={{}}>
              <div className="service_icon p-3 d-inline" style={{border:"8px solid var(--color-bg)",borderRadius:"50%"}}>
                  <BsCodeSlash  className="icon"/>
              </div>

              <div className="service_content mt-5">
                <h4><span className='sh'></span>Front-End<span className='sh_'></span></h4>
                <ul>
                  <li>Strong knowledge of web technologies such as HTML, CSS, Bootstrap.</li>
                  <li>Strong knowledge of JavaScript, React JS, Json, AJAX.</li>
                </ul>
              </div>

            </div>

            <div className="service col-lg-3 col-12 text-center mb-5" style={{}}>
              <div className="service_icon p-3 d-inline" style={{border:"8px solid var(--color-bg)",borderRadius:"50%"}}>
                  <BiCodeCurly className="icon" />
              </div>

              <div className="service_content mt-5">
                <h4><span className='sh'></span>Back-End <span className='sh_'></span></h4>
                <ul>
                  <li>Knowledge of PHP, Laravel.</li>
                  <li>Knowledge of database platform such as MySQL.</li>
                </ul>
              </div>

            </div>

            <div className="service col-lg-3 col-12 text-center mb-5" style={{}}>
              <div className="service_icon p-3 d-inline" style={{border:"8px solid var(--color-bg)",borderRadius:"50%"}}>
                  <FaCodeBranch className="icon"/>
              </div>

              <div className="service_content mt-5">
                
                <h4><span className='sh'></span>Full-Stack <span className='sh_'></span></h4>
                <ul>
                  <li>Knowledge of HTML, CSS, HTML5, CSS3, Bootstrap, JS, AJAX, JSON, Reactjs, PHP, Laravel, MySQL.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}

export default Services