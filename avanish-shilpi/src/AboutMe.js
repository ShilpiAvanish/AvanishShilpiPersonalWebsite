import React, { useEffect } from "react";
import "./style/AboutMe.css"; // CSS for styling
import ProfilePicture from "./images/mypics.jpg"; // Replace with your profile image

export default function AboutMe() {
  // Add scroll animation using Intersection Observer
  useEffect(() => {
    const aboutMeSection = document.querySelector(".about-me-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutMeSection.classList.add("visible");
          } else {
            aboutMeSection.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the element is visible
    );

    observer.observe(aboutMeSection);

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <section className="about-me-section">
      <div className="about-me-title-container">
        <h2 className="about-me-title">ABOUT ME -</h2>
      </div>
      <div className="about-me-container">
        <div className="about-me-right">
          <div className="about-me-bubble">
            <p><strong><span className="ut-link">Student at UT Austin</span></strong></p>
            <p><strong>Major:</strong> Computer Science</p>
            <p><strong>Minors:</strong> Law &amp; Business Administration</p>
            <p><strong>Interests:</strong> Artificial Intelligence & Machine Learning</p>
            <p><strong>Contact:</strong> <a href="mailto:avanish.shilpi@utexas.edu">avanish.shilpi@utexas.edu</a></p>
          </div>
        </div>
        <div className="about-me-left">
          <img src={ProfilePicture} alt="Profile" className="about-me-image" />
        </div>
      </div>
    </section>
  );
}
