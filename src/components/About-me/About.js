import React from "react";
import { useRef, useEffect } from "react";
import "./About.css";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


function About() {


    var tl = gsap.timeline({duration: 1, ease: "power1.out"});

    const aboutAnime = useRef(null);
    useEffect(() => {
        const el = aboutAnime.current;
        gsap.fromTo(el, {x: 200, opacity: 0, visibility: "hidden", duration: 1, smoothOrigin: true}, {x: 0, opacity: 1, visibility: "visible", duration: 2, scrollTrigger: {
            trigger: el,
            start: 40
        }});
    }, [])


        

    return(
        <div className="about-container container is-loading">
            {/* <div className="about-row"> */}
                <div className="about-me-text-container" ref={aboutAnime}>
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