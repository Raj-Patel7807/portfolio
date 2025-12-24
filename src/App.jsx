import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import { Navbar } from "./components/Navbar/navbar.jsx";
import { Home } from "./components/Home/home.jsx";
import { About } from "./components/About/about.jsx";
import { Education } from "./components/Education/education.jsx";
import { Achievements } from "./components/Skills/achievements.jsx";
import { Projects } from "./components/Work/projects.jsx";
import { Resume } from "./components/Resume/resume.jsx";
import { Contact } from "./components/Contact/contact.jsx";
import { Footer } from "./components/Footer/footer.jsx";

function App() {
    return (
        <>
            <div className="App">
                <Navbar />

                <section id="home">
                    <Home />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="education">
                    <Education />
                </section>

                <section id="achievements">
                    <Achievements />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="resume">
                    <Resume />
                </section>

                <section id="contact">
                    <Contact />
                </section>

                <section id="footer">
                    <Footer />
                </section>
            </div>
        </>
    );
}

export default App;
