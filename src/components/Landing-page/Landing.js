import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Landing.css"
import Github from "./images/github.svg";
import Instagram from "./images/instagram.svg";
import Linkedin from "./images/linkedin.svg";
import Scrolldown from "./images/scroll-down.svg";
import Logo from "./images/logo.svg";

function Landing(){

    const [primary, setPrimary] = useState(false);
    const [secondary, setSecondary] = useState(true)

    function handleChange(e){
       const value = e.target.value;

       if(value === "hrv"){
           setPrimary(true);
           setSecondary(false)
       }else{
        setPrimary(false);
        setSecondary(true);
       }
    }

    
    return(
        <div className="landing-container">
        {/* Navigation for landing page section contains logo image and language selection */}
            <nav className="navigation-container container">
                <img src={Logo} alt="Japanese-symbol" className="symbol"></img>
                <div className="button-container">
                    <button className={(primary ? "button" : "active button")} value="hrv" onClick={handleChange} >
                        HRV
                    </button>
                    <p className="button">/</p>
                    <button className={(secondary ? "button" : "active button")} value="eng" onClick={handleChange}>
                        ENG
                    </button>
                </div>
            </nav>
            {/* Text in the middle of the screen */}
            <section className="text-container container">
                <div className="textbox">
                <h3 className="landing-text 1">Hello,</h3>
                <h3 className="landing-text">My name is <span className="pink-color"> Patrik </span> ,</h3>
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
                <img className="triangle" src={Scrolldown} alt="scroll-down" />
            </div>
        </div>
    )
}

export default Landing;


