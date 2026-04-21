import React from "react";
import "./education.css";

export const Education = () => {
    return (
        <div className="education-container">
            <div
                className="section-title"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1>
                    <span className="sec-num">02.</span> Education
                </h1>
                <div className="line"></div>
            </div>

            <div className="edu-list">
                <div
                    className="edu-row"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="edu-date">2024 — 2028</div>
                    <div className="edu-details">
                        <div className="edu-header">
                            <h3>Dhirubhai Ambani University (DA-IICT)</h3>
                            <p className="edu-location">Gandhinagar, Gujarat</p>
                        </div>
                        <h4>
                            B.Tech - Information and Communication Technology
                        </h4>
                        <p>
                            CGPA: <span className="edu-score"> 8.45 / 10</span>
                        </p>
                    </div>
                </div>

                <div
                    className="edu-row"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    <div className="edu-date">2023 — 2024</div>
                    <div className="edu-details">
                        <div className="edu-header">
                            <h3>Pioneer School of Science</h3>
                            <p className="edu-location">Patan, Gujarat</p>
                        </div>
                        <h4>Class: 12th (GHSEB)</h4>
                        <p>
                            Percentage:{" "}
                            <span className="edu-score"> 92.92 %</span>
                        </p>
                    </div>
                </div>

                <div
                    className="edu-row"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <div className="edu-date">2021 — 2022</div>
                    <div className="edu-details">
                        <div className="edu-header">
                            <h3>Pioneer Secondary School</h3>
                            <p className="edu-location">Patan, Gujarat</p>
                        </div>
                        <h4>Class: 10th (GSEB)</h4>
                        <p>
                            Percentage:{" "}
                            <span className="edu-score"> 94.33 %</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
