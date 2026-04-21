import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { Images } from "../constants";

export const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    const closeMobileMenu = () => {
        setClick(false);
    };

    return (
        <>
            <nav data-aos="fade-down" data-aos-duration="850">
                <div className="thumb">
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
                    {/* <a
                        href="#experience"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        Experience
                    </a> */}
                    <a
                        href="#skills"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        Skills
                    </a>
                    <a
                        href="#achievements-list"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        Achievements
                    </a>
                    <a
                        href="#projects"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        Projects
                    </a>
                    <a
                        href="#responsibility"
                        className="nav-link"
                        onClick={closeMobileMenu}
                    >
                        POR
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
