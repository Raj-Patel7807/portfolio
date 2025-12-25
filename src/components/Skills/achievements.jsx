import React from "react";

import "./achievements.css";
import { Images } from "../constants";

export const Achievements = () => {
    return (
        <>
            <div className="achievements">
                <div className="ach-root">
                    <div className="achiev-section">
                        <div className="achiev-title">
                            <h1>Skills</h1>
                        </div>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <div className="skill-icon">⚡</div>
                                <div className="skill-content">
                                    <h3>Languages</h3>
                                    <p>C, C++</p>
                                </div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon">🗄️</div>
                                <div className="skill-content">
                                    <h3>Database</h3>
                                    <p>Something</p>
                                </div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon">🛠️</div>
                                <div className="skill-content">
                                    <h3>Dev Tools</h3>
                                    <p>VS Code, Git, GitHub, Postman, Linux</p>
                                </div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon">🧠</div>
                                <div className="skill-content">
                                    <h3>Interests</h3>
                                    <p>DSA, Competitive Programming, Problem Setting and Solving</p>
                                </div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon">📚</div>
                                <div className="skill-content">
                                    <h3>Core Subjects</h3>
                                    <p>DSA, DBMS, OS, OOPs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="achiev-section">
                        <div className="achiev-title">
                            <h1>Achievements</h1>
                        </div>
                        <div className="achievs-grid">
                            <a
                                href="https://codeforces.com/profile/Raj_Patel_7807"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ach-card"
                            >
                                <div className="ach-header">
                                    <h3>Codeforces</h3>
                                    <span className="ach-badge">Expert</span>
                                </div>
                                <p className="ach-stat">Max Rating: 1621</p>
                                <div className="ach-link">View Profile →</div>
                            </a>

                            <a
                                href="https://www.codechef.com/users/raj_patel_7807"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ach-card"
                            >
                                <div className="ach-header">
                                    <h3>CodeChef</h3>
                                    <span className="ach-badge">3-Star</span>
                                </div>
                                <p className="ach-stat">Max Rating: 1721</p>
                                <div className="ach-link">View Profile →</div>
                            </a>

                            <a
                                href="https://leetcode.com/u/Raj_Patel_7807/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ach-card"
                            >
                                <div className="ach-header">
                                    <h3>LeetCode</h3>
                                    <span className="ach-badge"></span>
                                </div>
                                <p className="ach-stat">Max Rating: 1838+</p>
                                <div className="ach-link">View Profile →</div>
                            </a>

                            <a
                                href="https://leetcode.com/u/Raj_Patel_7807/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ach-card"
                            >
                                <div className="ach-header">
                                    <h3>Problems Solved</h3>
                                    <span className="ach-badge">2200+</span>
                                </div>
                                <p className="ach-stat">Total 2200+ Problems Solved</p>
                                <div className="ach-link">View Profile →</div>
                            </a>

                            <div className="ach-card">
                                <div className="ach-header">
                                    <h3>JEE Main 2024</h3>
                                    <span className="ach-badge">National</span>
                                </div>
                                <p className="ach-stat">98.77 Percentile</p>
                                <div className="ach-link">
                                    Top 1.2% among 1.5 million students
                                </div>
                            </div>

                            <div className="ach-card">
                                <div className="ach-header">
                                    <h3>12th Science</h3>
                                    <span className="ach-badge">
                                        State Rank
                                    </span>
                                </div>
                                <p className="ach-stat">Rank 65 in Gujarat</p>
                                <div className="ach-link">
                                    Academic Excellence
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
