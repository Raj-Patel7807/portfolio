import React from "react";
import "./achievements.css";

export const Achievements = () => {
    return (
        <div className="ach-container">
            <div
                id="skills"
                className="section-title"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1>
                    <span className="sec-num">03.</span> Technical Skills
                </h1>
                <div className="line"></div>
            </div>

            <div
                className="skills-badge-container"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="skill-category">
                    <h3>Languages</h3>
                    <div className="badge-list">
                        <span className="skill-badge">C</span>
                        <span className="skill-badge">C++</span>
                        <span className="skill-badge">Java</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Databases</h3>
                    <div className="badge-list">
                        <span className="skill-badge">SQL</span>
                        <span className="skill-badge">PostgreSQL</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Developer Tools</h3>
                    <div className="badge-list">
                        <span className="skill-badge">Git</span>
                        <span className="skill-badge">GitHub</span>
                        <span className="skill-badge">Linux</span>
                        <span className="skill-badge">pgAdmin</span>
                        <span className="skill-badge">VS Code</span>
                        <span className="skill-badge">IntelliJ IDEA</span>
                        <span className="skill-badge">CLion</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Technical Elective</h3>
                    <div className="badge-list">
                        <span className="skill-badge">OOPs</span>
                        <span className="skill-badge">DBMS</span>
                        <span className="skill-badge">Data Structure</span>
                        <span className="skill-badge">Algorithms</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Area of Interest</h3>
                    <div className="badge-list">
                        <span className="skill-badge">
                            Competitive Programming
                        </span>
                        <span className="skill-badge">
                            Problem Solving and Setting
                        </span>
                        <span className="skill-badge">
                            Backend Dev & Low level Systems
                        </span>
                    </div>
                </div>
            </div>

            <div
                id="achievements-list"
                className="section-title mt-100"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1>
                    <span className="sec-num">04.</span> Achievements
                </h1>
                <div className="line"></div>
            </div>

            <div className="achievs-grid">
                <a
                    href="https://codeforces.com/profile/Raj_Patel_7807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ach-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="ach-header">
                        <h3>Codeforces</h3>
                        <span className="ach-badge">Expert</span>
                    </div>
                    <p className="ach-stat">Max Rating: 1642</p>
                    <div className="ach-link">View Profile &rarr;</div>
                </a>

                <a
                    href="https://www.codechef.com/users/raj_patel_7807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ach-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    <div className="ach-header">
                        <h3>CodeChef</h3>
                        <span className="ach-badge">3-Star</span>
                    </div>
                    <p className="ach-stat">Max Rating: 1769</p>
                    <div className="ach-link">View Profile &rarr;</div>
                </a>

                <a
                    href="https://leetcode.com/u/Raj_Patel_7807/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ach-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <div className="ach-header">
                        <h3>LeetCode</h3>
                        <span className="ach-badge">Knight</span>
                    </div>
                    <p className="ach-stat">Max Rating: 2018</p>
                    <div className="ach-link">View Profile &rarr;</div>
                </a>

                <a
                    href="https://codolio.com/profile/Raj_Patel_7807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ach-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <div className="ach-header">
                        <h3>Coding Profiles</h3>
                        <span className="ach-badge"></span>
                    </div>
                    <p className="ach-stat">2800+ Problems Solved</p>
                    <div className="ach-link">View Profile &rarr;</div>
                </a>

                <div
                    className="ach-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                    <div className="ach-header">
                        <h3>JEE Main 2024</h3>
                        <span className="ach-badge">National</span>
                    </div>
                    <p className="ach-stat">98.77 Percentile</p>
                    <div className="ach-link">Top 1.23% in India</div>
                </div>

                <div
                    className="ach-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    <div className="ach-header">
                        <h3>12th Science</h3>
                        <span className="ach-badge">State Rank</span>
                    </div>
                    <p className="ach-stat">Rank 65 in Gujarat</p>
                    <div className="ach-link">Academic Excellence</div>
                </div>
            </div>
        </div>
    );
};
