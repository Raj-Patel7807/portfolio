import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import { Navbar } from "./components/Navbar/navbar.jsx";
import { Home } from "./components/Home/home.jsx";
import { About } from "./components/About/about.jsx";
import { Education } from "./components/Education/education.jsx";
import { Achievements } from "./components/Skills/achievements.jsx";
import { Experience } from "./components/Experience/experience.jsx";
import { Responsibility } from "./components/Responsibility/responsibility.jsx";
import { Projects } from "./components/Projects/projects.jsx";
import { Resume } from "./components/Resume/resume.jsx";
import { Contact } from "./components/Contact/contact.jsx";
import { Footer } from "./components/Footer/footer.jsx";

function App() {
    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 800,
            easing: "ease-out-cubic",
            once: false,
            mirror: false,
            anchorPlacement: "top-bottom",
        });
    }, []);

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

                {/* <section id="experience">
                    <Experience />
                </section> */}

                <section id="achievements">
                    <Achievements />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="responsibility">
                    <Responsibility />
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
