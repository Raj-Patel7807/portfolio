import React from "react";
import "./about.css";

export const About = () => {
    return (
        <div className="about-container">
            <div
                className="section-title"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1>
                    <span className="sec-num">01.</span> About Me
                </h1>
                <div className="line"></div>
            </div>

            <div className="about-content">
                <div
                    className="about-text"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <p>
                        I am a third-year B.Tech (ICT) student at Dhirubhai
                        Ambani University (formerly DA-IICT). I like problem
                        solving, problem setting and learning new algorithms and
                        tricks.
                    </p>
                    <p>
                        Data Structures and Competitive Programming are my main
                        strengths. I have solved <strong>2800+ problems</strong>{" "}
                        across platforms including Codeforces, LeetCode,
                        CodeChef. I am an{" "}
                        <strong>Expert on Codeforces (max rating 1642)</strong>{" "}
                        ,{" "}
                        <strong>
                            3-star rated on CodeChef (max rating 1769)
                        </strong>
                        and a{" "}
                        <strong>Knight on LeetCode (max rating 2018)</strong>.
                    </p>
                    <p>
                        Apart from CP, I am interested in DBMS, OOPS, and
                        backend server-side development, low level design, How
                        various systems works and etc.. I don't know everything
                        yet, but I'm very Curious about that.
                    </p>
                </div>

                <div
                    className="about-stats"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <div className="stat-box">
                        <h3>Competitive Programmer</h3>
                        <p></p>
                    </div>
                    <div className="stat-box">
                        <h3>2800+</h3>
                        <p>Problems Solved</p>
                    </div>
                    <div className="stat-box">
                        <h3>Curious</h3>
                        <p>Backend & Systems</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
