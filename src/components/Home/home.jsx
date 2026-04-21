import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

import "./home.css";
import { Images, ResumeURL } from "../constants";

export const Home = () => {
    return (
        <>
            <div className="home">
                <div className="name">
                    <h1 data-aos="fade-down" data-aos-duration="850">
                        Hi, There 👋
                    </h1>
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="850"
                        data-aos-delay="80"
                    >
                        I'm <span>Raj Patel</span>
                    </h2>
                    <h3
                        className="typewriter-wrapper"
                        data-aos="fade-up"
                        data-aos-duration="850"
                        data-aos-delay="160"
                    >
                        <Typewriter
                            words={["I'm a Competitive Programmer..."]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={60}
                            delaySpeed={1200}
                        />
                    </h3>
                    <div
                        className="hero-actions"
                        data-aos="fade-up"
                        data-aos-duration="850"
                        data-aos-delay="260"
                    >
                        <a
                            href={ResumeURL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My Resume
                        </a>
                        <a href="#projects">View Projects</a>
                    </div>
                    <div
                        className="home-socials"
                        data-aos="fade-up"
                        data-aos-duration="850"
                        data-aos-delay="340"
                    >
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
                </div>

                <div
                    className="home-photo"
                    data-aos="zoom-in"
                    data-aos-duration="900"
                    data-aos-delay="120"
                    data-aos-easing="ease-out-cubic"
                >
                    <Tilt
                        className="home-tilt"
                        tiltMaxAngleX={6}
                        tiltMaxAngleY={6}
                        perspective={4200}
                        transitionSpeed={750}
                        scale={1.015}
                    >
                        <div className="home-photo-frame">
                            <img src={Images.Raj} alt="Raj Patel" />
                        </div>
                    </Tilt>
                </div>
            </div>
        </>
    );
};
