import React from "react";

import "./projects.css";

import Education_Portal_01 from "../../assets/Projects/Education_Portal_01.png";
import Education_Portal_02 from "../../assets/Projects/Education_Portal_02.png";
import Education_Portal_03 from "../../assets/Projects/Education_Portal_03.png";
import Snack_Game_01 from "../../assets/Projects/Snack_Game_01.png";
import Snack_Game_02 from "../../assets/Projects/Snack_Game_02.png";
import Snack_Game_03 from "../../assets/Projects/Snack_Game_03.png";
import Tetris_Game_01 from "../../assets/Projects/Tetris_Game_01.png";
import Tetris_Game_02 from "../../assets/Projects/Tetris_Game_02.png";
import Tetris_Game_03 from "../../assets/Projects/Tetris_Game_03.png";

export const Projects = () => {
    return (
        <>
            <div className="projects">
                <div className="projects-title">
                    <h1>
                        <u>Projects</u> 💻
                    </h1>
                </div>
                <div className="projects-all">
                    <div className="project-one">
                        <a
                            href="https://github.com/Raj-Patel7807/Education_Portal.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="project-one-title">
                                <h1>&#9679; Education Portal</h1>
                                <h5>HTML, CSS, JavaScript</h5>
                            </div>
                        </a>
                        <div className="project-one-photo">
                            
                        </div>
                        <div className="project-one-desc">
                            <p>An Education Portal Web</p>
                        </div>
                    </div>
                    <div className="project-one">
                        <a
                            href="https://github.com/Raj-Patel7807/Education_Portal.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="project-one-title">
                                <h1>&#9679; Snack Game</h1>
                                <h5>C++, OOPs</h5>
                            </div>
                        </a>
                        <div className="project-one-photo">
                            
                        </div>
                        <div className="project-one-desc">
                            <p>Snack Game</p>
                        </div>
                    </div>
                    <div className="project-one">
                        <a
                            href="https://github.com/Raj-Patel7807/Education_Portal.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="project-one-title">
                                <h1>&#9679; Tetris Game</h1>
                                <h5>C++, OOPs</h5>
                            </div>
                        </a>
                        <div className="project-one-photo">
                            
                        </div>
                        <div className="project-one-desc">
                            <p>Tetris Game</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
