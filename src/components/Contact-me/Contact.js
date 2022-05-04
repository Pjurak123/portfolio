import React, {useRef, useEffect} from "react";
import "./Contact.css";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {

    const contactAnime = useRef(null);
    useEffect(() => {
        const el = contactAnime.current;
        gsap.fromTo(el, 7, {opacity: 0, visibility: "hidden",  smoothOrigin: true}, {opacity: 1, visibility: "visible", ease: "power1.out", scrollTrigger: {
            trigger: el,
            start: 2300,
        }
    });
    }, [])

    return(
        <div className="contact-container is-loading">
            <div className="contact-form container" ref={contactAnime}>
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-text">I am currently looking for a new opportunity, my inbox is always open.</p>
                <a className="contact-button" href="mailto:pjurak3@gmail.com" target="_blank" rel="noreferrer">Contact Me</a>
            </div>
        </div>
    )
}

export default Contact;
