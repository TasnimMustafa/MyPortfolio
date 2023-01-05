import React, {useRef} from 'react';
import './contact.css';
import {TfiEmail} from 'react-icons/tfi';
import {RiMessengerLine} from 'react-icons/ri';
import {ImWhatsapp} from 'react-icons/im';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xlq2xwc', 'template_9d9q97k', form.current, 'NLB3aije9yfpOvpKB')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  };



  return (
    <div>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2 style={{}}>Contact Me</h2>

        <div className="container contact_container">
          <div className="row">
            
            <div className="col-lg-4">
              <div className="contact_social col-12">
                <div style={{fontSize:"25px"}}>
                <TfiEmail/>
                </div>
                <p>tasnimmosta126@gmail.com</p>
                <a href="mailto:tasnimmostafa126@gmail.com" target="_blank">Send a Message</a>
              </div>
              <div className="contact_social col-12">
                <div style={{fontSize:"25px"}}>
                <RiMessengerLine/>
                </div>
                <p>Let's Talk</p>
                <a href="https://m.me/tasneem688" target="_blank">Send a Message</a>
              </div>
              <div className="contact_social col-12">
                <div style={{fontSize:"25px"}}>
                <ImWhatsapp/>
                </div>
                <p>+2 010 221 042 96</p>
                <a href="https://api.whatsapp.com/send?phone=+01022104296" target="_blank">Send a Message</a>
              </div>
            </div>


            <div className="contact_form col-lg-8">
              <form ref={form} method='POST' onSubmit={sendEmail}>
              <input type="text" name="name" placeholder='Your Full Name' className='py-3 px-2 mb-3 w-100' required/>
              <input type="email" name="email" placeholder='Your Email' className='py-3 px-2 mb-3 w-100' required/>
              <textarea cols="10" name='message' rows="5" className='w-100 py-3 px-2' placeholder='Your Message' required></textarea>
              <button type="submit" className='btnn btn-prim'>Send Message</button>

              </form>
            </div>

          </div>

          
        </div>
      </section>
    </div>
  )
}

export default Contact