import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
import { Images } from "../constants";

export const Home = () => {
    return (
        <>
            <div className="home">
                <div className="name">
                    <h1 data-aos="fade-down" data-aos-duration="1000">Hi, There 👋</h1>
                    <h2 data-aos="zoom-in" data-aos-duration="1000">I'm <span>Raj Patel</span></h2>
                    <h3 className="typewriter-wrapper" data-aos="fade-right" data-aos-duration="1000">
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
                    <div className="home-socials" data-aos="fade-up" data-aos-duration="1000">
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

                <div className="home-photo" data-aos="fade-left" data-aos-duration="1000">
                    <Tilt
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={4000}
                        transitionSpeed={900}
                        scale={1.02}
                    >
                        <img src={Images.Raj} alt="Raj Patel" />
                    </Tilt>
                </div>
            </div>
        </>
    );
};
