import React from "react";
import "./projects.css";

export const Projects = () => {
    const projects = [
        {
            name: "RFlow - API Gateway",
            description:
                "Built a multi-tenant API Gateway with Spring Boot, PostgreSQL, and Docker, featuring rate limiting, request logging, health monitoring, and traffic control. Developed 55+ REST APIs with JSESSIONID-based authentication and centralized tenant/service management.",
            stack: ["Java", "Spring Boot", "Hibernate/JPA", "Docker", "PostgreSQL"],
            github: "https://github.com/Raj-Patel7807/rflow",
            live: "https://rflow-lovat.vercel.app/login",
        },
        {
            name: "RepoPulse",
            description:
                "A GitHub like Console based system with 25+ database tables (mostly BCNF normalized).",
            stack: ["Java", "DBMS", "PostgreSQL", "JDBC"],
            github: "https://github.com/Raj-Patel7807/RepoPulse",
            live: "",
        },
        {
            name: "R++ Lang.",
            description:
                "A custom programming language (R++) with lexer, parser, and AST-based interpreter.",
            stack: ["Java", "OOPs"],
            github: "https://github.com/Raj-Patel7807/RppLang",
            live: "",
        },
        {
            name: "Snake++",
            description:
                "Build a terminal-based real time cross-platform (Windows & Linux) Snake Game in C++ using OOPs concepts.",
            stack: ["C++", "STL", "OOP", "Linux"],
            github: "https://github.com/Raj-Patel7807/snake-game",
            live: "",
        },
    ];

    return (
        <div className="projects-container">
            <div
                className="section-title"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h1>
                    <span className="sec-num">05.</span> Projects
                </h1>
                <div className="line"></div>
            </div>

            <div className="projects-zigzag">
                {projects.map((project, index) => (
                    <article
                        key={project.name}
                        className={`project-card ${index % 2 === 1 ? "reverse" : ""}`}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={index * 100}
                    >
                        <div className="project-index">0{index + 1}</div>
                        <div className="project-content">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="project-meta">
                                {/* <h4>Stack</h4> */}
                                <ul className="project-stack">
                                    {project.stack.map((item) => (
                                        <li key={`${project.name}-${item}`}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};
