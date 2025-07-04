import React, { useEffect } from "react";
import "./style/Experience.css"; // CSS for styling
import Disney from "./images/Disney.png"; // Replace with your logo path
import InternNest from "./images/internnestpic.png"; // Replace with your logo path
import Tecmend from "./images/tecmend.png"; // Replace with your logo path
import UTLogo from "./images/utlogo.png"; // Replace with your logo path
import GithubLogo from "./images/githublogo.png"; // GitHub logo
import SalesforceLogo from "./images/salesforce.png"; // Salesforce logo

export default function Experience() {
  const experiences = [
    {
      logo: SalesforceLogo,
      company: "Salesforce",
      title: "AI Engineer Intern",
      duration: "Summer 2025",
    },
    {
      logo: GithubLogo,
      company: "GitHub",
      title: "AI/ML Engineer Intern",
      duration: "Spring 2025",
    },
    {
      logo: Disney,
      company: "The Walt Disney Company",
      title: "ML Engineer Intern",
      duration: "Summer 2024",
    },
    {
      logo: InternNest,
      company: "InternNest",
      title: "Co-Founder",
      duration: "Jan 2024–Present",
    },
   
    
    
  ];

  // Add scroll animation using Intersection Observer
  useEffect(() => {
    const items = document.querySelectorAll(".experience-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the element is visible
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <section className="experience-section">
      <h2 className="experience-title">EXPERIENCE -</h2>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-logo">
              <img src={experience.logo} alt={`${experience.company} Logo`} />
            </div>
            <div className="experience-content">
              <h3 className="experience-title-role">
                {experience.title} <span>@ {experience.company}</span>
              </h3>
              <p className="experience-duration">{experience.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
