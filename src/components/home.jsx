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
                        <img src={Google} alt="Google" />
                        <img src={LinkedIn} alt="LinkedIn" />
                        <img src={Telegram} alt="Telegram" />
                        <img src={GitHub} alt="GitHub" />
                        <img src={CodeForces} alt="CodeForces" />
                        <img src={CodeChef} alt="CodeChef" />
                        <img src={LeetCode} alt="LeetCode" />
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
