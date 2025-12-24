import React from "react";

import "./projects.css";
import { Images } from "../constants";

export const Projects = () => {
    return (
        <>
            <div className="projects">
                <div className="pro-root">
                    <div className="projects-title">
                        <h1>
                            <u>Projects</u> 💻
                        </h1>
                    </div>
                    <div className="all-project">
                        <div className="project-card">
                            <div className="proj-img">
                                <img
                                    src={Images.SnackGame}
                                    alt="Snack_Game"
                                    title="Snack_Game"
                                />
                            </div>
                            <div className="proj-desc">
                                <h3>Snake++</h3>
                                <p>C++, STL, OOPs, Linux</p>
                                <p>
                                    Terminal Based real time cross platform
                                    snake game in C++ using OOPs concepts.
                                </p>
                                <button>
                                    <a
                                        href="https://github.com/Raj-Patel7807/Snake_Game"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="proj-img">
                                <img
                                    src={Images.EducationPortal}
                                    alt="Education_Portal"
                                    title="Education_Portal"
                                />
                            </div>
                            <div className="proj-desc">
                                <h3>Education Portal</h3>
                                <p>HTML, CSS, JavaScript</p>
                                <p>
                                    Multi-page Education Portal website with
                                    interactive UI elements and animations.
                                </p>
                                <button>
                                    <a
                                        href="https://github.com/Raj-Patel7807/Education_Portal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </button>
                                <button>
                                    <a
                                        href="https://raj-patel7807.github.io/Education_Portal/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="proj-img">
                                <img
                                    src={Images.TetrisGame}
                                    alt="Tetris_Game"
                                    title="Tetris_Game"
                                />
                            </div>
                            <div className="proj-desc">
                                <h3>BlockFall++</h3>
                                <p>C++, STL, OOPs, Linux</p>
                                <p>
                                    Terminal Based real time tetris game in C++
                                    using OOPs concepts.
                                </p>
                                <button>
                                    <a
                                        href="https://github.com/Raj-Patel7807/Tetris_Game"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
