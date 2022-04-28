import React, {useRef, useEffect} from "react";
import "./Contact.css";
import {gsap} from "gsap";

function Contact() {
   
    useEffect(() => {
        gsap.fromTo(".contact-container", {opacity: 0, x: 300}, {opacity: 1, x: 0})
    })



    return(
        <div className="contact-container is-loading">
            <div className="contact-form container">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-text">I am currently looking for a new opportunity, my inbox is always open.</p>
                <a className="contact-button" href="mailto:pjurak3@gmail.com" target="_blank" rel="noreferrer">Contact Me</a>
            </div>
        </div>
    )
}

export default Contact;
