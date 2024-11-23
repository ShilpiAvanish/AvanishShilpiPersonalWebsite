import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      {/* Landing Page */}
      <LandingPage />

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <Achievements />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;