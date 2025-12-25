import React from "react";

import "./education.css";
import { Images } from "../constants";

export const Education = () => {
    return (
        <>
            <div className="education">
                <div className="edu-root">
                    <div className="edu-title">
                        <h1>Education</h1>
                    </div>
                    <div className="edu-schools">
                        <div className="school">
                            <div className="school-logo">
                                <img src={Images.DAU} alt="DAU" />
                            </div>
                            <div className="school-bio">
                                <div className="school-header">
                                    <h3 className="school-name">
                                        Dhirubhai Ambani University
                                    </h3>
                                    <span className="school-batch">
                                        2024 - 2028
                                    </span>
                                </div>
                                <h4 className="school-location">
                                    Gandhinagar, Gujarat
                                </h4>
                                <div className="school-details">
                                    <p className="school-course">
                                        B.Tech - ICT
                                    </p>
                                    <span className="school-score">
                                        CGPA: 8.2/10
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="school">
                            <div className="school-logo">
                                <img src={Images.Pioneer} alt="Pioneer" />
                            </div>
                            <div className="school-bio">
                                <div className="school-header">
                                    <h3 className="school-name">
                                        Pioneer School of Science
                                    </h3>
                                    <span className="school-batch">
                                        2023 - 2024
                                    </span>
                                </div>
                                <h4 className="school-location">
                                    Patan, Gujarat
                                </h4>
                                <div className="school-details">
                                    <p className="school-course">
                                        Class: 12<sup>th</sup> (GHSEB)
                                    </p>
                                    <span className="school-score">
                                        Percentage: 92.92%
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="school">
                            <div className="school-logo">
                                <img src={Images.Pioneer} alt="Pioneer" />
                            </div>
                            <div className="school-bio">
                                <div className="school-header">
                                    <h3 className="school-name">
                                        Pioneer Secondary School
                                    </h3>
                                    <span className="school-batch">
                                        2021 - 2022
                                    </span>
                                </div>
                                <h4 className="school-location">
                                    Patan, Gujarat
                                </h4>
                                <div className="school-details">
                                    <p className="school-course">
                                        Class: 10<sup>th</sup> (GSEB)
                                    </p>
                                    <span className="school-score">
                                        Percentage: 94.33%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
