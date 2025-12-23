import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './about.css';

import Raj from "../../assets/Raj.png";

export const About = () => {
    return (
        <>
            <div className='about'>
                <div className="myphoto" data-aos="fade-right" data-aos-duration="1000">
                    <img src={Raj} alt='Raj Patel'></img>
                </div>
                <div className="aboutme">
                    <div className="about-name">
                        <h1 data-aos="fade-down" data-aos-duration="1000"><u>About Me</u> 🧑🏻‍💻</h1>
                        <h1 data-aos="fade-left" data-aos-duration="1000">Raj Patel</h1>
                        <h5 data-aos="fade-left" data-aos-duration="1000">Patan, Gujarat, India</h5>
                    </div>
                    <div className="about-bio" data-aos="fade-up" data-aos-duration="1000">
                        I am a Second Year B.Tech(ICT) student at Dhirubhai Ambani University (Formerly DA-IICT).
                        Data Structures are my strong suit, and I'm passionate about Competitive Programming and Problem Solving.
                        As a Coder, I've solved 2200+ Problems across several platforms, including Codeforces, CodeChef and LeetCode.
                        Furthermore, I am interested in Web development and have made a few web projects using my Development skills.
                        Currently I am a 3 star Coder at CodeChef Max Rating(1721), CodeForces (Expert) Max Rating (1621).
                    </div>
                </div>
            </div>
        </>
    )
};
