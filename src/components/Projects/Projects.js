import React, {useRef, useEffect} from "react";
import "./Projects.css";
import Folder from "./images/folder.svg";
import "./Data.js";
import { Data } from "./Data.js";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Projects(props) {

    const projectStart = useRef(null);
    useEffect(() => {
        const projectEl = projectStart.current;
        gsap.fromTo(projectEl, {x: 100, opacity: 0, visibility: "hidden"}, {visibility: "visible", x: 0, opacity: 1, duration: 3, scrollTrigger: {
            trigger: projectEl,
            start: 40
        }});
    }, [])



    return(
        <div className="project-container container is-loading">
            <div className="project-content" ref={projectStart}>
                <h3 className="projects-title">Some Things I've Built</h3>
                <div className="row">
                {Data.map ((data, index) => {
                    return(
                <div key={index} className="card">
                            <div className="icons-container">
                            <img src={Folder} alt="folder" />
                            <a className="external-link" href={data.link} target="_blank" rel="noreferrer">
                            <svg className="external-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3C3.90694 3 3 3.90694 3 5V19C3 20.0931 3.90694 21 5 21H19C20.0931 21 21 20.0931 21 19V12H19V19H5V5H12V3H5ZM14 3V5H17.5859L8.29297 14.293L9.70703 15.707L19 6.41406V10H21V3H14Z" fill="#444444"/>
                            </svg>
                            </a>
                            </div>
                        
                        <h3 className="project-title">{data.title}</h3>
                        <p className="project-description">{data.description}</p>
                        <ul className="project-list-technologies">
                            <li className="project-list-item">{data.items[1]}</li>
                            <li className="project-list-item">{data.items[2]}</li>
                            <li className="project-list-item">{data.items[3]}</li>
                            <li className="project-list-item">{data.items[4]}</li>
                        </ul>
                </div>
                    );
                })}
                </div>
            </div>
        </div>
    )
}

export default Projects;