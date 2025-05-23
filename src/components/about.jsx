import React from 'react';
import './about.css';

import Raj from "../assets/Raj.jpg";

export const About = () => {
    return (
        <>
            <div className='about'>
                <div className="myphoto">
                    <img src={Raj} alt='Raj Patel'></img>
                </div>
                <div className="aboutme">
                    <div className="about-name">
                        <h1><u>About Me</u> 🧑🏻‍💻</h1>
                        <h1>Raj Patel</h1>
                        <h5>Mehsana, Gujarat, India</h5>
                    </div>
                    <div className="about-bio">
                        I am a Second Year B.Tech(ICT) student at Dhirubhai Ambani University (Formerly DA-IICT).
                        Data Structures are my strong suit, and I'm passionate about Competitive Programming and Problem Solving.
                        As a Coder, I've solved 1300+ Problems across several platforms, including Codeforces, CodeChef and LeetCode.
                        Furthermore, I am interested in Web development and have made a few web projects using my Development skills.
                        Currently I am a 3 star Coder at CodeChef Max Rating(1702), CodeForces (Specialist) Max Rating (1517).
                    </div>
                </div>
            </div>
        </>
    )
};
