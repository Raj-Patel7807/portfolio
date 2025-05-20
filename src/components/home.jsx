import React from "react";
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
                    <h2>I'm a Competitive Programmer..</h2>
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
