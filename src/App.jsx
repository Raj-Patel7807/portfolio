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

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route 
                            path="/" 
                            element={<Home />}
                        />
                        <Route 
                            path="/about" 
                            element={<About />}
                        />
                        <Route 
                            path="/education" 
                            element={<Education />} 
                        />
                        <Route
                            path="/achievements"
                            element={<Achievements />}
                        />
                        <Route 
                            path="/projects" 
                            element={<Projects />}
                        />
                        <Route 
                            path="/resume" 
                            element={<Resume />} 
                        />
                        <Route 
                            path="/contact" 
                            element={<Contact />} 
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
