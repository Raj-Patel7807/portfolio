import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

import Shinchan from "../assets/Raj1.png";
import Google from "../assets/Socials/Gmail_4.svg"; // 3 - 4
import LinkedIn from "../assets/Socials/LinkedIn_3.svg"; // 2 - 3
import Telegram from "../assets/Socials/Telegram_9.svg"; // 8 - 9
import GitHub from "../assets/Socials/GitHub_1.svg"; // 1 - 2
import CodeForces from "../assets/Socials/CodeForces_1.svg"; // 1 - 2
import CodeChef from "../assets/Socials/CodeChef_2.svg";
import LeetCode from "../assets/Socials/LeetCode_1.svg"; // 1 - 2

const Typewriter = ({
    text = "I'm a Competitive Programmer...",
    speed = 100,
    pause = 1000,
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        let typingInterval;

        if (!deleting && index <= text.length) {
            typingInterval = setTimeout(() => {
                setDisplayedText(text.substring(0, index));
                setIndex((prev) => prev + 1);
            }, speed);
        } else if (deleting && index >= 0) {
            typingInterval = setTimeout(() => {
                setDisplayedText(text.substring(0, index));
                setIndex((prev) => prev - 1);
            }, speed / 2);
        } else {
            setTimeout(() => setDeleting((prev) => !prev), pause);
        }

        return () => clearTimeout(typingInterval);
    }, [index, deleting, text, speed, pause]);

    return <span className="typewriter">{displayedText}</span>;
};

export const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="home">
                <div className="name">
                    <h1>Hi, There 👋</h1>
                    <h2>I’m <span>Raj Patel</span></h2>
                    <h3 className="typewriter-wrapper">
                        <Typewriter
                            text="I'm a Competitive Programmer...😎"
                            speed={90}
                        />
                    </h3>
                    <div className="home-socials">
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
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => navigate("/about")}
                    >
                        About Me
                    </button>
                </div>

                <div className="home-photo">
                    <img src={Shinchan} alt="Raj Patel" />
                </div>
            </div>
        </>
    );
};
