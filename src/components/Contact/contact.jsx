import React from "react";

import "./contact.css";

import Google from "../../assets/Socials/Google.svg";
import LinkedIn from "../../assets/Socials/LinkedIn.svg";
import Telegram from "../../assets/Socials/Telegram.svg";
import GitHub from "../../assets/Socials/GitHub.svg";
import CodeForces from "../../assets/Socials/CodeForces.svg";

export const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="title">Contact -------</div>
                <div className="contact-socials">
                    <div className="social-title">Social Profiles</div>
                    <div className="socials-icons"> {'>'}
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=rajpatel7807@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Google} alt="Google" title="Google" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/raj-patel7807/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={LinkedIn} alt="LinkedIn" title="LinkedIn" />
                        </a>
                        <a
                            href="https://t.me/Raj_Patel_7807"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Telegram} alt="Telegram" title="Telegram" />
                        </a>
                        <a
                            href="https://github.com/Raj-Patel7807"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={GitHub} alt="GitHub" title="GitHub" />
                        </a>
                        <a
                            href="https://codeforces.com/profile/Raj_Patel_7807"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={CodeForces}
                                alt="CodeForces"
                                title="CodeForces"
                            />
                        </a>
                    </div>
                </div>
                <div className="mail">
                    <div className="mail-title">E-mail</div>
                    <div className="gmail">
                        {'>'}&nbsp;&nbsp;&nbsp;&nbsp;rajpatel7807@gmail.com
                    </div>
                </div>
                <form className="contact-form">
                    <div className="form-row">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <input type="text" placeholder="Subject" required />
                    <textarea
                        placeholder="Message"
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    );
};
