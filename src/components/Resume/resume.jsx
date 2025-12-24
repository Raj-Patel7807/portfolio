import React from "react";

import "./resume.css";
import { Images } from "../constants";

const resumeURL = "../../../public/Raj_Patel_Resume.pdf";

export const Resume = () => {
    return (
        <>
            <div className="Resume">
                <div
                    className="get-res"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <div className="res-img">
                        <img
                            src={Images.ResumeImg}
                            alt="Raj_Resume"
                            title="Raj_Resume"
                        />
                    </div>
                    <div className="res-desc">
                        <h1>My Resume 📄</h1>
                        <button
                            onClick={() => window.open(resumeURL, "_blank")}
                        >
                            Open
                        </button>

                        <button
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = resumeURL;
                                link.download = "Raj_Patel_Resume.pdf";
                                link.click();
                            }}
                        >
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
