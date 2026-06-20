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
                "Assisting in leading the Programming Club, organizing Pre-Placement Tests and CP contests.",
            ],
        },
        {
            title: "Batch Representative",
            organization: "Programming Club, DAU",
            duration: "August 2025 - April 2026",
            points: [
                "Conducted CP sessions and post-contest discussions, organized 5+ intra-college contests, set and tested problems for 10+ contests; also coordinated events as team lead at i.Fest’25 and Synapse’25.",
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
