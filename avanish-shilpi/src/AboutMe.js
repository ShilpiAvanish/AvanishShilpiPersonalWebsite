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
            <p>Hey there, I'm Avanish!</p>
            <p>
              I'm a student at{" "}
              <span style={{ color: "#ff3e09", fontWeight: "bold" }}>
                University of Texas at Austin
              </span>{" "}
              pursuing a degree in{" "}
              <span style={{ color: "#ff3e09", fontWeight: "bold" }}>
                Computer Science
              </span>{" "}
              and Minors in Law & Business Administration. I’m interested in
              Software Engineering, Web Development, and Big Data.
            </p>
            <p>
              I love meeting new people and am always eager to learn from
              others, so feel free to reach me at{" "}
              <a href="mailto:avanish.shilpi@utexas.edu">
                avanish.shilpi@utexas.edu
              </a>
              .
            </p>
          </div>
        </div>
        <div className="about-me-left">
          <img src={ProfilePicture} alt="Profile" className="about-me-image" />
        </div>
      </div>
    </section>
  );
}
