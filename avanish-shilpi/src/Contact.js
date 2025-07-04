import React from "react";
import "./style/Contact.css"; // CSS for styling
import GitHubLogo from "./images/github.png"; // Replace with your GitHub logo image
import LinkedInLogo from "./images/linkedin.png"; // Replace with your LinkedIn logo image
import ResumeLogo from "./images/resume.png"; // Replace with your resume logo image

export default function Contact() {
  return (
    <section className="contact-section">
      {/* Contact Title */}
      <h2 className="contact-title">CONTACT -</h2>

      {/* Contact Icons */}
      <div className="contact-icons">
        {/* GitHub Logo */}
        <a href="https://github.com/ShilpiAvanish" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <img src={GitHubLogo} alt="GitHub" />
        </a>

        {/* LinkedIn Logo */}
        <a href="https://www.linkedin.com/in/avanish-shilpi/" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <img src={LinkedInLogo} alt="LinkedIn" />
        </a>

        {/* Resume Logo */}
        <a href="https://drive.google.com/file/d/1CiACLeWgiMTjqMBT-WNp--t_E0vwaLjx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <img src={ResumeLogo} alt="Resume" />
        </a>
      </div>

      {/* Email */}
      <div className="contact-email">
        <a href="mailto:avanish.shilpi@utexas.edu">avanish.shilpi@utexas.edu</a>
      </div>
    </section>
  );
}
