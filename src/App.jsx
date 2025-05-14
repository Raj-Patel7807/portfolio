import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import { Navbar } from "./components/navbar.jsx";
import { Home } from "./components/home.jsx";
import { About } from "./components/about.jsx";
import { Skills } from "./components/skills.jsx";
import { Education } from "./components/education.jsx";
import { Work } from "./components/work.jsx";
import { Experience } from "./components/experience.jsx";
import { Contact } from "./components/contact.jsx";

function App() {
  return (
    <>
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    </>
  )
};

export default App
