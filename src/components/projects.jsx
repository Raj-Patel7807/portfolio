import React from 'react';

import "./projects.css";

import Education_Portal_01 from "../assets/Projects/Education_Portal_01.png";

export const Projects = () => {
    return (
        <>
            <div className='projects'>
                <div className="projects-title">
                    <h1><u>Projects</u> 💻</h1>
                </div>
                <div className="projects-all">
                    <div className="project-one">
                        <div className="project-one-title">
                            <h1>Education Portal</h1>
                            <h6>HTML, CSS, JavaScript</h6>
                        </div>
                        <div className="project-one-photo">
                            <img src={Education_Portal_01} alt="Education_Portal_01" />
                        </div>
                        <div className="project-one-desc">
                            <p></p>
                        </div>
                    </div>
                    <div className="project-one">
                        <div className="project-one-title">
                            <h1>Snakc Game</h1>
                            <h6>C++, OOPs</h6>
                        </div>
                        <div className="project-one-photo">
                        
                        </div>
                        <div className="project-one-desc">
                            <p></p>
                        </div>
                    </div>
                    <div className="project-one">
                        <div className="project-one-title">
                            <h1>Tetris Game</h1>
                            <h6>C++, OOPs</h6>
                        </div>
                        <div className="project-one-photo">
                        
                        </div>
                        <div className="project-one-desc">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
