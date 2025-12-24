import React from "react";

import "./footer.css";
import { Images } from "../constants";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="foot-title">
                    <h3>Raj Patel</h3>
                </div>
                <div className="foot-links nav-underline">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#education" className="nav-link">Education</a>
                    <a href="#achievements" className="nav-link">Skills & Achievements</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#resume" className="nav-link">Resume</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
                <div className="foot-socials">
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=rajpatel7807@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Images.Google}
                            alt="Google"
                            title="Google"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/raj-patel7807/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Images.LinkedIn}
                            alt="LinkedIn"
                            title="LinkedIn"
                        />
                    </a>
                    <a
                        href="https://t.me/Raj_Patel_7807"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Images.Telegram}
                            alt="Telegram"
                            title="Telegram"
                        />
                    </a>
                    <a
                        href="https://github.com/Raj-Patel7807"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Images.GitHub} 
                            alt="GitHub"
                            title="GitHub"
                        />
                    </a>
                    <a
                        href="https://codeforces.com/profile/Raj_Patel_7807"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Images.CodeForces}
                            alt="CodeForces"
                            title="CodeForces"
                        />
                    </a>
                    <a
                        href="https://www.codechef.com/users/raj_patel_7807"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Images.CodeChef}
                            alt="CodeChef"
                            title="CodeChef"
                        />
                    </a>
                    <a
                        href="https://leetcode.com/u/Raj_Patel_7807/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Images.LeetCode}
                            alt="LeetCode"
                            title="LeetCode"
                        />
                    </a>
                </div>
                <div className="copyright">
                    <p>@2026 Raj Patel. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};
