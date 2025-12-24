import React from "react";

import "./achievements.css";
import { Images } from "../constants"

export const Achievements = () => {
    return (
        <>
            <div className="achievements">
                <div className="achiev-title" data-aos="fade-down" data-aos-duration="1000">
                    <h1>
                        <u>Skills</u> 💻
                    </h1>
                </div>
                <div className="skills">
                    <div className="skill">
                        <p className="sk-title">Languages : </p>
                        <p>C, C++</p>
                    </div>
                    <div className="skill">
                        <p className="sk-title">Database : </p>
                        <p>xyz..</p>
                    </div>
                    <div className="skill">
                        <p className="sk-title">Dev Tools : </p>
                        <p>Ubuntu, VS Code, Git, GitHub</p>
                    </div>
                    <div className="skill">
                        <p className="sk-title">Area of Interest : </p>
                        <p>DSA, CP, Problem Solving - Setting</p>
                    </div>
                    <div className="skill">
                        <p className="sk-title">Core Subject : </p>
                        <p>Data Structure, Design and Analysis of Algo, OOPs</p>
                    </div>
                </div>
                <div className="achiev-title" data-aos="fade-down" data-aos-duration="1000">
                    <h1>
                        <u>Achievements</u> 🎯
                    </h1>
                </div>
                <div className="achievs">

                </div>
            </div>
        </>
    );
};
