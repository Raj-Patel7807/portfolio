import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import { Navbar } from "./components/navbar.jsx";
import { Home } from "./components/home.jsx";
import { About } from "./components/about.jsx";
import { Education } from "./components/education.jsx";
import { Achievements } from "./components/achievements.jsx";
import { Projects } from "./components/projects.jsx";
import { Resume } from "./components/resume.jsx";
import { Contact } from "./components/contact.jsx";

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route 
                            path="/" 
                            element={<Home />} />
                        <Route 
                            path="/about" 
                            element={<About />} />
                        <Route 
                            path="/education" 
                            element={<Education />} />
                        <Route
                            path="/achievements"
                            element={<Achievements />}
                        />
                        <Route 
                            path="/projects" 
                            element={<Projects />} />
                        <Route 
                            path="/resume" 
                            element={<Resume />} />
                        <Route 
                            path="/contact" 
                            element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
