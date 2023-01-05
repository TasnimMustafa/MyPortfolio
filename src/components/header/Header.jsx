import React from 'react';
import './header.css';
import Btn from './Btn';
// import ME from '../../assets/me.png'
import Headersocials from './Headersocials';
import Typewriter from 'typewriter-effect';

const Header = () => {

    const name = (myName) =>{
    setInterval(()=>{
        // myName.typeString('Tasneem Mostafa Elshamia')
        // .pauseFor(2000)
        // .deleteAll()
        myName.typeString("Full-Stack Developer")
        .deleteAll()
        .start()},1000)};
    return (
    <>
    <header style={{height:"100vh", width:"100%"}}>
        <div className="container header_container">
            <h4 style={{color:"var(--color-primary)"}}>Hello I’m</h4>
            
            <h1>Tasneem Mostafa Elshamia</h1>
            <div style={{color:"var(--color-primary)"}}>
            <Typewriter onInit={name} />
            </div>
            {/* <div className="text-light">Full-Stack Developer </div> */}
            <Btn/>

            {/* <div className="me">
                <img src={ME} alt="" />
            </div> */}

            <a href="#contact" className='scroll_down'>Scroll Down</a>
            <Headersocials/>
        </div>
    </header>
    </> 
    )
    }

export default Header