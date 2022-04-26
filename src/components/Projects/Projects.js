import React from "react";
import "./Projects.css";
import Folder from "./images/folder.svg";
import External from "./images/external.svg";
import "./Data.js";
import { Data } from "./Data.js";

function Projects(props) {

    return(
        <div className="project-container container">
            <div className="project-content">
                <h3 className="projects-title">Some Things I've Built</h3>
                {Data.map ((data, index) => {
                    return(
                        <div className="card">
                        <div className="icons-container">
                        <img src={Folder} alt="folder" />
                        <a href="/"><img src={External} alt="external-link"/></a>
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
    )
}

export default Projects;