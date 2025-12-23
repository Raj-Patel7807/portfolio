import React from "react";

import "./education.css";

import DAU from "../../assets/Schools/DAU.png";
import Pioneer from "../../assets/Schools/Pioneer.jpg";

export const Education = () => {
    return (
        <>
            <div className="education">
                <div className="edu-title" data-aos="fade-down" data-aos-duration="1000">
                    <h1>
                        <u>Education</u> 🎓
                    </h1>
                </div>
                <div className="edu-schools">
                    <div className="school dau" data-aos="fade-right" data-aos-duration="1000">
                        <div className="school-logo">
                            <img src={DAU} alt="DAU" />
                        </div>
                        <div className="school-bio">
                            <p className="school-name">
                                Dhirubhai Ambani University (Formerly DA-IICT),
                                Gandhinagar <p className="school-batch">2024 - 2028</p>
                            </p>
                            <p className="school-course">
                                B.Tech - Information And Communication
                                Technology <p className="school-score">CGPA: 8.2/10</p>
                            </p>
                        </div>
                    </div>
                    <div className="school pioneer" data-aos="fade-left" data-aos-duration="1000">
                        <div className="school-logo">
                            <img src={Pioneer} alt="Pioneer" />
                        </div>
                        <div className="school-bio">
                            <p className="school-name">
                                Pioneer School of Science, Patan <p className="school-batch" style={{margin:"0 0 0 445px"}}>2023 - 2024</p>
                            </p>
                            <p className="school-course">
                                Class: 12<sup>th</sup> <p className="school-score" style={{margin:"0 0 0 623px"}}>Percentage: 92.92%</p>
                            </p>
                            
                        </div>
                    </div>
                    <div className="school pioneer" data-aos="fade-left" data-aos-duration="1000">
                        <div className="school-logo">
                            <img src={Pioneer} alt="Pioneer" />
                        </div>
                        <div className="school-bio">
                            <p className="school-name">
                                Pioneer Secondary School, Patan
                                <p className="school-batch" style={{margin:"0 0 0 445px"}}>2021 - 2022</p>
                            </p>
                            <p className="school-course">
                                Class: 10<sup>th</sup> <p className="school-score" style={{margin:"0 0 0 619px"}}>Percentage: 94.33%</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
