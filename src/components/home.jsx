import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./home.css";

import Shinchan from "../assets/Shinchan.jpg";
import Google from "../assets/Google.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Telegram from "../assets/Telegram.svg";
import GitHub from "../assets/GitHub.svg";
import CodeForces from "../assets/CodeForces.svg";
import CodeChef from "../assets/CodeChef.svg";
import LeetCode from "../assets/LeetCode.svg";

const Typewriter = ({ text = "I'm a Competitive Programmer...", speed = 100, pause = 1000 }) => {
    const [displayedText, setDisplayedText] = useState('');
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
                    <h1>
                        Hii, There <br />
                        I'm Raj Patel.
                    </h1>
                    <h2 className="typewriter-wrapper">
                        <Typewriter
                            text="I'm a Competitive Programmer...😎" speed={80}
                        />
                    </h2>
                    <div className="home-socials">
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=rajpatel7807@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Google} alt="Google" className="w-8 h-8"/>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/raj-patel7807/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-text="LinkedIn: raj-patel7807"
                        >
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                        <a
                            href="https://t.me/Raj_Patel_7807"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Telegram} alt="Telegram" />
                        </a>
                        <a
                            href="https://github.com/Raj-Patel7807"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={GitHub} alt="GitHub" />
                        </a>
                        <a
                            href="https://codeforces.com/profile/Raj_Patel_7807"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={CodeForces} alt="CodeForces" />
                        </a>
                        <a
                            href="https://www.codechef.com/users/raj_patel_7807"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={CodeChef} alt="CodeChef" />
                        </a>
                        <a
                            href="https://leetcode.com/u/Raj_Patel_7807/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={LeetCode} alt="LeetCode" />
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
                <div className="photo">
                    <img src={Shinchan} alt="Raj Patel" />
                </div>
            </div>
        </>
    );
};
