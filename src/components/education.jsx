import React from "react";

import "./education.css";

import DAU from "../assets/Schools/DAU.png";
import Pioneer from "../assets/Schools/Pioneer.jpg";

export const Education = () => {
    return (
        <>
            <div className="education">
                <div className="edu-title">
                    <h1>
                        <u>Education</u> 🎓
                    </h1>
                </div>
                <div className="edu-schools">
                    <div className="school dau">
                        <div className="school-logo">
                            <img src={DAU} alt="DAU" />
                        </div>
                        <div className="school-bio">
                            <p className="school-name">
                                Dhirubhai Ambani University (Formerly DA-IICT),
                                Gandhinagar
                            </p>
                            <p className="school-course">
                                B.Tech - Information And Communication
                                Technology
                            </p>
                            <p className="school-batch">2024 - 2028</p>
                        </div>
                    </div>
                    <div className="school pioneer">
                        <div className="school-logo">
                            <img src={Pioneer} alt="Pioneer" />
                        </div>
                        <div className="school-bio">
                            <p className="school-name">
                                Pioneer School of Science, Patan
                            </p>
                            <p className="school-course">
                                9<sup>th</sup> - 12<sup>th</sup>,
                                (Physics-Chemestry-Maths)
                            </p>
                            <p className="school-batch">2020 - 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
