import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Landing.css"
import Logo from "./images/symbol1.svg";
import Github from "./images/github.svg";
import Instagram from "./images/instagram.svg";
import Linkedin from "./images/linkedin.svg";

function Landing(){

    // function handleClick(e) {
    //     setLanguage(e.target.value)
    //     console.log(language);
    // }

    // const [language, setLanguage] = useState(0);

    
    return(
        <div className="landing-container">
        {/* Navigation for landing page section contains logo image and language selection */}
            <nav className="navigation-container container">
                <img src={Logo} alt="Japanese-symbol" className="symbol"></img>
                <div className="button-container">
                    <button className="button" value="hrv">
                        HRV
                    </button>
                    <p className="button">/</p>
                    <button className="button" value="eng">
                        ENG
                    </button>
                </div>
            </nav>
            {/* Text in the middle of the screen */}
            <section className="text-container container">
                <div className="textbox">
                <h3 className="landing-text">Hello,</h3>
                <h3 className="landing-text">My name is <span className="patrik"> Patrik </span> ,</h3>
                <h3 className="landing-text">I am Frontend Developer!</h3>
                </div>
            </section>
            {/* Social icons  */}
            <section className="social-media-container container">
                <div className="social-media">
                    <img className="social-icon" src={Github} alt="github" />
                    <img className="social-icon" src={Instagram} alt="instagram" />
                    <img className="social-icon" src={Linkedin} alt="linkedin" />
                </div>
            </section>
            {/* Scroll down */}
            <div className="scroll-container">
                <p className="scroll-text">SCROLL DOWN</p>
            </div>
        </div>
    )
}

export default Landing;


