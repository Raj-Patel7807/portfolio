import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import Shinchan from "../../assets/Shinchan.jpg";

export const Navbar = () => {
    return (
        <>
            <nav data-aos="fade-down" data-aos-duration="1000">
                <div className="thumb" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                    <img src={Shinchan} alt="Thumb" />
                    <p>Raj Patel</p>
                </div>
                <div className="links nav-underline" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#education" className="nav-link">Education</a>
                    <a href="#achievements" className="nav-link">Skills & Achievements</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#resume" className="nav-link">Resume</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </nav>
        </>
    );
};
