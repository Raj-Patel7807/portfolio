import React from "react";
import "../Experience/experience.css";
import "./responsibility.css";

export const Responsibility = () => {
    const roles = [
        {
            title: "Deputy Convener",
            organization: "Programming Club, DAU",
            duration: "April 2026 - Present",
            points: [
                "Assisting in leading the Programming Club, organizing Pre-Placement Tests for 450+ students and the club’s flagship event with 120+ participants. Mentoring juniors through sessions and post-contest discussions."
            ],
        },
        {
            title: "Batch Representative",
            organization: "Programming Club, DAU",
            duration: "August 2025 - April 2026",
            points: [
                "Organized 10+ intra-college contests (80+ participants), including problem setting, testing, and coordinated coding events as team lead at i.Fest’25 and Synapse’25 (college techno-cultural festivals) with 100+ participants."
            ],
        },
    ];

    return (
        <div className="responsibility-container">
            <div
                className="section-title"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1>
                    <span className="sec-num">06.</span> Positions of
                    Responsibility
                </h1>
                <div className="line"></div>
            </div>

            <div className="timeline">
                {roles.map((role, index) => (
                    <div
                        className="timeline-item"
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>
                                    {role.title}{" "}
                                    <span>@ {role.organization}</span>
                                </h3>
                                <p className="timeline-date">{role.duration}</p>
                            </div>
                            <ul className="timeline-points">
                                {role.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
