import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import Shinchan from "../assets/Shinchan.jpg";

export const Navbar = () => {
    return (
        <>
            <nav>
                <div className="thumb">
                    <img src={Shinchan} alt="Thumb" />
                    <p>Raj Patel</p>
                </div>
                <div className="links nav-underline">
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
                        to="/skills"
                        className={({ isActive }) =>
                            `nav-link${isActive ? " active" : ""}`
                        }
                    >
                        Skills
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
                        to="/work"
                        className={({ isActive }) =>
                            `nav-link${isActive ? " active" : ""}`
                        }
                    >
                        Work
                    </NavLink>
                    <NavLink
                        to="/experience"
                        className={({ isActive }) =>
                            `nav-link${isActive ? " active" : ""}`
                        }
                    >
                        Experience
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
