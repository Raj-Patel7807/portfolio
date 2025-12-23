import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './about.css';

import Raj from "../../assets/Raj.png";

export const About = () => {
    return (
        <>
            <div className='about'>
                <div className="aboutme">
                    <h1 data-aos="fade-down" data-aos-duration="1000"><u>About Me</u> 🧑🏻‍💻</h1>
                    <div className="about-name">
                        <h1 data-aos="fade-left" data-aos-duration="1000">Raj Patel</h1>
                        <h5 data-aos="fade-left" data-aos-duration="1000">Patan, Gujarat, India</h5>
                    </div>
                    <div className="about-bio" data-aos="fade-up" data-aos-duration="1000">
                        <p>I am a second-year B.Tech (ICT) student at Dhirubhai Ambani University (formerly DA-IICT). I like problem solving, algorithms, and building things that work fast and efficiently.</p>
                        <p>Data Structures and Competitive Programming are my main strengths. I have solved 2200+ problems on Codeforces, CodeChef, and LeetCode. I am an Expert on Codeforces (max rating 1621) and a 3-star coder on CodeChef (max rating 1721). I really enjoy Competitive Programming and love learning new algorithms and techniques. I like thinking about time complexity, space usage, and edge cases.</p>
                        <p>Apart from CP, I am interested in DBMS, OOPS, and backend server-side development. I don’t know everything yet, but I can build basic servers, work with databases, and understand core backend logic. I also know a little frontend and can build simple user interfaces when needed.</p>
                        <p>I am always trying to learn more and improve myself—by solving harder problems, writing cleaner code, and understanding systems better.</p>
                    </div>
                </div>
            </div>
        </>
    )
};
