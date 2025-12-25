import React from "react";

import "./resume.css";
import { Images } from "../constants";

const resumeURL = "/Raj_Patel_Resume.pdf";

export const Resume = () => {
    return (
        <div className="resume-section">
            <div className="resume-container">
                <div className="resume-header">
                    <h1 data-aos="fade-down" data-aos-duration="1000">
                        Resume
                    </h1>
                    <div
                        className="underline"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    ></div>
                </div>

                <div className="resume-content">
                    <div
                        className="resume-card"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div className="card-visual">
                            <div className="visual-circle"></div>
                            <div className="visual-content">
                                <span>CV</span>
                            </div>
                        </div>
                        <div className="card-info">
                            <h2>Raj Patel</h2>
                            <p>Competitive Programmer</p>
                            <div className="card-actions">
                                <button
                                    className="res-btn view"
                                    onClick={() =>
                                        window.open(resumeURL, "_blank")
                                    }
                                >
                                    <span>👁️ View PDF</span>
                                </button>
                                <button
                                    className="res-btn download"
                                    onClick={() => {
                                        const link =
                                            document.createElement("a");
                                        link.href = resumeURL;
                                        link.download = "Raj_Patel_Resume.pdf";
                                        link.click();
                                    }}
                                >
                                    <span>⬇️ Download</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
