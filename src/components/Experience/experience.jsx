import React from "react";
import "./experience.css";

export const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer Intern",
            company: "Tech Corp",
            duration: "May 2025 - July 2025",
            description:
                "Developed and maintained web applications using React and Node.js. Improved performance by 20% through code optimization.",
        },
        {
            title: "Frontend Developer",
            company: "Freelance",
            duration: "Jan 2024 - Present",
            description:
                "Built responsive and user-friendly interfaces for various clients. Collaborated with designers to implement UI/UX best practices.",
        },
    ];

    return (
        <div className="experience-container">
            <div
                className="section-title"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1>
                    <span className="sec-num">03.</span> Where I've Worked
                </h1>
                <div className="line"></div>
            </div>

            <div className="timeline">
                {experiences.map((exp, index) => (
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
                                    {exp.title} <span>@ {exp.company}</span>
                                </h3>
                                <p className="timeline-date">{exp.duration}</p>
                            </div>
                            <p className="timeline-desc">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
