import React from "react";
import "./style/AboutMe.css"; // CSS for styling
import ProfilePicture from "./images/mypics.jpg"; // Replace with your profile image

export default function AboutMe() {
  return (
    <section className="about-me-section">
      <div className="about-me-title-container">
        <h2 className="about-me-title">About Me</h2>
      </div>
      <div className="about-me-container">
        <div className="about-me-right">
          <div className="about-me-bubble">
            <p>Hey there, I'm Avanish!</p>
            <p>
              I'm a student at University of Texas at Austin pursuing a
              degree in Computer Science and Minors in Law & Business Administration. I’m interested in Software Engineering,
              Web Development, and Big Data
            </p>
            
            <p>
              I love meeting new people and am always eager to learn from
              others, so feel free to reach me at{" "}
              <a href="mailto:avanish.shilpi@utexas.edu">
              avanish.shilpi@utexas.edu
              </a>
              .
            </p>
            <a href="/resume.pdf" className="about-me-resume-link">
              My Resume
            </a>
          </div>
        </div>
        <div className="about-me-left">
          <img src={ProfilePicture} alt="Profile" className="about-me-image" />
        </div>
      </div>
    </section>
  );
}
