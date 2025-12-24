import React from "react";

import "./achievements.css";

import CodeForces from "../../assets/Socials/CodeForces.svg";
import CodeChef from "../../assets/Socials/CodeChef.png";
import LeetCode from "../../assets/Socials/LeetCode.png";
import Codolio from "../../assets/Socials/Codolio.svg";

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
                    <div className="skill-card">
                        <img src={CodeForces} alt="React" />
                        <p>ReactJS</p>
                    </div>

                    <div className="skill-card">
                        <img src={CodeForces} alt="React" />
                        <p>ReactJS</p>
                    </div>

                    <div className="skill-card">
                        <img src={CodeForces} alt="React" />
                        <p>ReactJS</p>
                    </div>

                    <div className="skill-card">
                        <img src="/icons/node.svg" alt="Node" />
                        <p>NodeJS</p>
                    </div>

                    <div className="skill-card">
                        <img src="/icons/redux.svg" alt="Redux" />
                        <p>Redux</p>
                    </div>

                    <div className="skill-card">
                        <img src="/icons/firebase.svg" alt="Firebase" />
                        <p>Firebase</p>
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
