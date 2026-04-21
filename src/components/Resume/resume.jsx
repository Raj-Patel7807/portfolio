import React from "react";
import "./resume.css";

import { ResumeURL } from "../constants";

export const Resume = () => {
    return (
        <div className="resume-container">
            <div
                className="section-title"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1>
                    <span className="sec-num">07.</span> Resume
                </h1>
                <div className="line"></div>
            </div>

            <div
                className="resume-box"
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                <div className="resume-content">
                    <h2>Grab a copy of my Resume!</h2>
                    <p>
                        It contains a brief summary of my experience, projects,
                        and education.
                    </p>
                    <div className="resume-actions">
                        <a
                            href={ResumeURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-btn outline"
                        >
                            View Resume
                        </a>
                        <a
                            href={ResumeURL}
                            download="Raj_Patel_Resume.pdf"
                            className="resume-btn solid"
                        >
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
