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
                    <div className="skill-card">
                        <img src={Images.CodeForces} alt="React" />
                        <p>ReactJS</p>
                    </div>

                    <div className="skill-card">
                        <img src={Images.CodeForces} alt="React" />
                        <p>ReactJS</p>
                    </div>

                    <div className="skill-card">
                        <img src={Images.CodeForces} alt="React" />
                        <p>ReactJS</p>
                    </div>

                    <div className="skill-card">
                        <img src={Images.CodeForces} alt="Node" />
                        <p>NodeJS</p>
                    </div>

                    <div className="skill-card">
                        <img src={Images.CodeForces} alt="Redux" />
                        <p>Redux</p>
                    </div>

                    <div className="skill-card">
                        <img src={Images.CodeForces} alt="Firebase" />
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
