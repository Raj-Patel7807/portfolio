import React from "react";

import "./achievements.css";
import { Images } from "../constants"

export const Achievements = () => {
    return (
        <>
            <div className="achievements">
                <div className="ach-root">
                    <div className="achiev-title" data-aos="fade-right" data-aos-duration="1000">
                        <h1>
                            <u>Skills</u> 💻
                        </h1>
                    </div>
                    <div className="skills">
                        <div className="skill" data-aos="fade-left" data-aos-duration="1000">
                            <p className="sk-title">Languages : </p>
                            <p>C, C++</p>
                        </div>
                        <div className="skill" data-aos="fade-right" data-aos-duration="1000">
                            <p className="sk-title">Database : </p>
                            <p>xyz..</p>
                        </div>
                        <div className="skill" data-aos="fade-left" data-aos-duration="1000">
                            <p className="sk-title">Dev Tools : </p>
                            <p>Ubuntu, VS Code, Git, GitHub</p>
                        </div>
                        <div className="skill" data-aos="fade-right" data-aos-duration="1000">
                            <p className="sk-title">Area of Interest : </p>
                            <p>DSA, CP, Problem Solving - Setting</p>
                        </div>
                        <div className="skill" data-aos="fade-left" data-aos-duration="1000">
                            <p className="sk-title">Core Subject : </p>
                            <p>Data Structure, Design and Analysis of Algo, OOPs</p>
                        </div>
                    </div>
                    <div className="achiev-title" data-aos="fade-right" data-aos-duration="1000">
                        <h1>
                            <u>Achievements</u> 🎯
                        </h1>
                    </div>
                    <div className="achievs">
                        <div className="ach" data-aos="fade-left" data-aos-duration="1000">
                            <p className="ac-title">Codeforces : </p>
                            <p>Expert (Max Rating: 1621)</p>
                            <a
                                href="https://codeforces.com/profile/Raj_Patel_7807"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                [Raj_Patel_7807]
                            </a>
                        </div>
                        <div className="ach" data-aos="fade-right" data-aos-duration="1000">
                            <p className="ac-title">CodeChef : </p>
                            <p>3-Star (Max Rating: 1721)</p>
                            <a
                                href="https://www.codechef.com/users/raj_patel_7807"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                [raj_patel_7807]
                            </a>
                        </div>
                        <div className="ach" data-aos="fade-left" data-aos-duration="1000">
                            <p className="ac-title">LeetCode : </p>
                            <p> (Max Rating: 1675)</p>
                            <a
                                href="https://leetcode.com/u/Raj_Patel_7807/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                [Raj_Patel_7807]
                            </a>
                        </div>
                        <div className="ach" data-aos="fade-right" data-aos-duration="1000">
                            <p>Solved <b>2200+</b> Coding Problems across the platforms</p>
                            <a
                                href="https://codolio.com/profile/Raj_Patel_7807"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                [Profile]
                            </a>
                        </div>
                        <div className="ach" data-aos="fade-left" data-aos-duration="1000">
                            <p className="ac-title">JEE (Main) 2024 : </p>
                            <p>98.77 Percentile</p>
                        </div>
                        <div className="ach" data-aos="fade-right" data-aos-duration="1000">
                            <p>Secured All Gujarat Rank <b>65</b> in 12th Science</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
