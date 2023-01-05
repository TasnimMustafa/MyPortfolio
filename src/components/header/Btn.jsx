import React from 'react';
import CV from '../../assets/cv.pdf';

const Btn = () => {
  return (
    <div className='Hbtn'>
        <a href={CV} download className='btnn'>Download CV</a>
        <a href='#contact' className='btnn btn-prim'>Let’s Talk</a>
    </div>
  )
}

export default Btn