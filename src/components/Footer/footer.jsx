import React from "react";

import "./footer.css";
import { Images } from "../constants";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="foot-title">
                        <h3 data-aos="fade-down" data-aos-duration="1000">
                            Raj Patel
                        </h3>
                    </div>

                    <ul
                        className="foot-links"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <li>
                            <a href="#home" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#education" className="nav-link">
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="#achievements" className="nav-link">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#resume" className="nav-link">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div
                        className="foot-socials"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=rajpatel7807@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                        >
                            <img src={Images.Google} alt="Google" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/raj-patel7807/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img src={Images.LinkedIn} alt="LinkedIn" />
                        </a>
                        <a
                            href="https://t.me/Raj_Patel_7807"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                        >
                            <img src={Images.Telegram} alt="Telegram" />
                        </a>
                        <a
                            href="https://github.com/Raj-Patel7807"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <img src={Images.GitHub} alt="GitHub" />
                        </a>
                        <a
                            href="https://codeforces.com/profile/Raj_Patel_7807"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="CodeForces"
                        >
                            <img src={Images.CodeForces} alt="CodeForces" />
                        </a>
                        <a
                            href="https://www.codechef.com/users/raj_patel_7807"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="CodeChef"
                        >
                            <img src={Images.CodeChef} alt="CodeChef" />
                        </a>
                        <a
                            href="https://leetcode.com/u/Raj_Patel_7807/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LeetCode"
                        >
                            <img src={Images.LeetCode} alt="LeetCode" />
                        </a>
                    </div>

                    <div className="copyright">
                        <p>©2026 Raj Patel. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
