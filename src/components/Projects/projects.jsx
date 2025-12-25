import React from "react";

import "./projects.css";
import { Images } from "../constants";

export const Projects = () => {
    return (
        <>
            <div className="projects">
                <div className="pro-root">
                    <div className="projects-title">
                        <h1 data-aos="fade-down" data-aos-duration="1000">
                            Projects
                        </h1>
                    </div>
                    <div className="all-project">
                        <div
                            className="project-card"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="proj-img">
                                <img
                                    src={Images.SnackGame}
                                    alt="Snake Game"
                                    loading="lazy"
                                />
                                <div className="proj-overlay">
                                    <a
                                        href="https://github.com/Raj-Patel7807/Snake_Game"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="proj-btn github"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                            <div className="proj-content">
                                <h3>Snake++</h3>
                                <div className="proj-tech">
                                    <span>C++</span>
                                    <span>STL</span>
                                    <span>OOPs</span>
                                    <span>Linux</span>
                                </div>
                                <p>
                                    Terminal-based real-time Snake game
                                    featuring object-oriented design patterns,
                                    cross-platform compatibility, and smooth
                                    rendering logic.
                                </p>
                            </div>
                        </div>

                        <div
                            className="project-card"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="proj-img">
                                <img
                                    src={Images.EducationPortal}
                                    alt="Education Portal"
                                    loading="lazy"
                                />
                                <div className="proj-overlay">
                                    <a
                                        href="https://github.com/Raj-Patel7807/Education_Portal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="proj-btn github"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://raj-patel7807.github.io/Education_Portal/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="proj-btn live"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                            <div className="proj-content">
                                <h3>Education Portal</h3>
                                <div className="proj-tech">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JS</span>
                                    <span>LocalStorage</span>
                                </div>
                                <p>
                                    A comprehensive multi-page educational
                                    platform featuring interactive UI
                                    components, smooth animations, and
                                    responsive design.
                                </p>
                            </div>
                        </div>

                        <div
                            className="project-card"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >
                            <div className="proj-img">
                                <img
                                    src={Images.TetrisGame}
                                    alt="Tetris Game"
                                    loading="lazy"
                                />
                                <div className="proj-overlay">
                                    <a
                                        href="https://github.com/Raj-Patel7807/Tetris_Game"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="proj-btn github"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                            <div className="proj-content">
                                <h3>BlockFall++</h3>
                                <div className="proj-tech">
                                    <span>C++</span>
                                    <span>STL</span>
                                    <span>OOPs</span>
                                </div>
                                <p>
                                    Modern terminal-based Tetris implementation
                                    with advanced collision detection, score
                                    tracking, and performance optimization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
