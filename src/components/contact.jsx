import React from 'react';
import "./contact.css";

export const Contact = () => {
    return (
        <>
            <div className='contact'>
                <div className="title">Contact -------</div>
                <div className="socials">
                    <a href="#"><i class="fab fa-google"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
                <div className="mail"></div>
                <form className="contact-form">
                    <div className="form-row">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    )
};
