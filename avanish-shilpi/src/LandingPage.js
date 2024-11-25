import React from "react";
import "./style/LandingPage.css"; // Updated path to CSS
import StarWarsImage from "./images/starw.png"; // Replace with your actual image file path
import GitHubLogo from "./images/github.png"; // Replace with your GitHub logo image
import LinkedInLogo from "./images/linkedin.png"; // Replace with your LinkedIn logo image
import ResumeLogo from "./images/resume.png"; // Replace with your resume logo image

export default function LandingPage() {
  return (
    <section id="landing-page" className="landing-page">
      {/* Top-right icons */}
      <div className="top-right-icons">
        <a href="https://github.com/ShilpiAvanish" target="_blank" rel="noopener noreferrer">
          <img src={GitHubLogo} alt="GitHub" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/avanish-shilpi/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn" className="icon" />
        </a>
        <a href="https://drive.google.com/file/d/1pe_qWw7AZ4aWPNmflV50kLcwdodO_aTa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={ResumeLogo} alt="Resume" className="icon" />
        </a>
      </div>

      <div className="text-section">
        <p className="greeting">HELLO THERE 👋, I'm</p>
        <h1 className="name">Avanish Shilpi</h1>
        <h2 className="role">SOFTWARE ENGINEER</h2>
        <p className="description">
          JavaScript • Python • React • Django • Apache Kafka • MySQL • AWS 
          <br />
          Computer Science at University of Texas at Austin 🤘
        </p>
        <button
          className="cta-button"
          onClick={() => window.open("https://drive.google.com/file/d/1pe_qWw7AZ4aWPNmflV50kLcwdodO_aTa/view?usp=sharing", "_blank")}
        >
          CHECK OUT MY CV!
        </button>
      </div>

      <div className="image-section">
        <img src={StarWarsImage} alt="Star Wars Art" className="star-wars-image" />
      </div>
    </section>
  );
}
