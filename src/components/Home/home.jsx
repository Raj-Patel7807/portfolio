import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

import Shinchan from "../../assets/Raj.png";
import Google from "../../assets/Socials/Gmail_4.svg"; // 3 - 4
import LinkedIn from "../../assets/Socials/LinkedIn_3.svg"; // 2 - 3
import Telegram from "../../assets/Socials/Telegram_9.svg"; // 8 - 9
import GitHub from "../../assets/Socials/GitHub_1.svg"; // 1 - 2
import CodeForces from "../../assets/Socials/CodeForces_1.svg"; // 1 - 2
import CodeChef from "../../assets/Socials/CodeChef_2.svg";
import LeetCode from "../../assets/Socials/LeetCode_1.svg"; // 1 - 2

export const Home = () => {
    return (
        <>
            <div className="home">
                <div className="name">
                    <h1 data-aos="zoom-in" data-aos-duration="1000">Hi, There 👋</h1>
                    <h2 data-aos="zoom-in" data-aos-duration="1000">I’m <span>Raj Patel</span></h2>
                    <h3 className="typewriter-wrapper" data-aos="zoom-in" data-aos-duration="1000">
                        <Typewriter
                            words={["I'm a Competitive Programmer... 😎"]}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={60}
                            delaySpeed={1200}
                        />
                    </h3>
                    <div className="home-socials" data-aos="fade-right" data-aos-duration="1000">
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=rajpatel7807@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={Google}
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
                                src={LinkedIn}
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
                                src={Telegram}
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
                                src={GitHub} 
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
                                src={CodeForces}
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
                                src={CodeChef}
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
                                src={LeetCode}
                                alt="LeetCode"
                                title="LeetCode"
                            />
                        </a>
                    </div>
                </div>

                <div className="home-photo" data-aos="fade-up" data-aos-duration="1000">
                    <Tilt
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        perspective={5000}
                        transitionSpeed={900}
                        scale={1.02}
                    >
                        <img src={Shinchan} alt="Raj Patel" />
                    </Tilt>
                </div>
            </div>
        </>
    );
};
