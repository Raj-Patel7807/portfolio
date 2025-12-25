import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { Images } from "../constants";

export const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => {
        console.log("Menu icon clicked. Current state:", !click);
        setClick(!click);
    };
    const closeMobileMenu = () => {
        console.log("Link clicked. Closing menu.");
        setClick(false);
    };

    return (
        <>
            <nav data-aos="fade-down" data-aos-duration="1000">
                <div
                    className="thumb"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    <img src={Images.Shinchan} alt="Thumb" />
                    <p>Raj Patel</p>
                </div>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <div className={click ? "links active" : "links"}>
                    <a
                        href="#home"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        About
                    </a>
                    <a
                        href="#education"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        Education
                    </a>
                    <a
                        href="#achievements"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        Skills & Achievements
                    </a>
                    <a
                        href="#projects"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        Projects
                    </a>
                    <a
                        href="#resume"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        Resume
                    </a>
                    <a
                        href="#contact"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </>
    );
};
