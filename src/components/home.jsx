import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

import Shinchan from "../assets/Shinchan.jpg";

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
