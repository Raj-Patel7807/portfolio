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
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `nav-link${isActive ? " active" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `nav-link${isActive ? " active" : ""}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/education"
                        className={({ isActive }) =>
                            `nav-link${isActive ? " active" : ""}`
                        }
                    >
                        Education
                    </NavLink>
                    <NavLink
                        to="/achievements"
                        className={({ isActive }) =>
                            `nav-link${isActive ? " active" : ""}`
                        }
                    >
                        Achievements
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `nav-link${isActive ? " active" : ""}`
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/resume"
                        className={({ isActive }) =>
                            `nav-link${isActive ? " active" : ""}`
                        }
                    >
                        Resume
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `nav-link${isActive ? " active" : ""}`
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </>
    );
};
