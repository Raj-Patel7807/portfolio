import React from 'react'

import "./resume.css";
import { Images } from "../constants"; 

const resumeURL = "../../../public/Raj_Patel_Resume.pdf";

export const Resume = () => {
    return (
        <>
            <div className="Resume">
                <div className='res-title'>
                    <h1>
                        <u>Resume</u> 📄
                    </h1>
                </div>
                <div className='get-res'>
                    <div className='res-img'>
                        <img src={Images.ResumeImg} alt="Raj_Resume" title='Raj_Resume' />
                    </div>
                    <div className='res-desc'>
                        <h3>My Resume</h3>
                        <button onClick={() => window.open(resumeURL, "_blank")}>
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
    )
};
