import React from "react";
import "./About.css";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Profile from "./images/profile.svg";

function About() {

   if (typeof window !== "undefined") {
       gsap.registerPlugin(ScrollTrigger)
   }

    gsap.fromTo(".about-me-title", {
        scrollTrigger: ".about-me-title",
        x: 500
    }, {
        x: 0
    });

    return(
        <div className="about-container container is-loading">
            {/* <div className="about-row"> */}
                <div className="about-me-text-container">
                    <h3 className="about-me-title">
                        About Me
                    </h3>
                    <p className="first-part about-text-color">
                    Hello! My name is Patrik and I enjoy creating things that live on the internet. My interest in web development started back in high school where I was first introduced to it.
                    </p>
                    <p className="second-part about-text-color"> 
                    Fast-forward to today, and I've had the privilege of intership at <span className="pink-color">software development companies</span>, working at a <span className="pink-color">huge corporation</span> and student work at <span className="pink-color">information systems supports agency</span>.
                    </p>
                    <p className="intro-tech about-text-color">Here are a few <span className="pink-color">technologies</span> I've been working on:</p>
                    <ul className="technology-list">
                        <li className="list-item">Html</li>
                        <li className="list-item">Css</li>
                        <li className="list-item">Javascript</li>
                        <li className="list-item">React</li>
                        <li className="list-item">Node.js</li>
                        <li className="list-item">Pl/Sql</li>
                    </ul>
                </div>
                {/* <div className="about-me-image-container">
                    <div className="about-wrapper">
                        <div className="about-layer">
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default About;