import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

import Shinchan from '../assets/Shinchan.jpg';

export const Navbar = () => {
    return (
        <>
            <nav>
                <div className="thumb">
                    <img src={Shinchan} alt="Thumb" />
                    <p>Raj Patel</p>
                </div>
                <div className="links nav-underline">
                    <Link to='/home' className='nav-link active'>Home</Link>
                    <Link to='/about' className='nav-link'>About</Link>
                    <Link to='/skills' className='nav-link'>Skills</Link>
                    <Link to='/education' className='nav-link'>Education</Link>
                    <Link to='/work' className='nav-link'>Work</Link>
                    <Link to='/experience' className='nav-link'>Experience</Link>
                    <Link to='/contact' className='nav-link'>Contact</Link>
                </div>
            </nav>
        </>
    )
};
