import React from "react";
import "./style/Experience.css"; // CSS for styling
import Disney from "./images/Disney.png"; // Replace with your logo path
import InternNest from "./images/internnestpic.png"; // Replace with your logo path
import Tecmend from "./images/tecmend.png"; // Replace with your logo path
import UTLogo from "./images/utlogo.png"; // Replace with your logo path

export default function Experience() {
  const experiences = [
    {
      logo: Disney,
      company: "The Walt Disney Company",
      title: "Software Engineer Intern",
      duration: "May 2024–August 2024",
    },
    {
      logo: InternNest,
      company: "InternNest",
      title: "Co-Founder",
      duration: "Jan 2024–Present",
    },
    {
      logo: Tecmend,
      company: "Tecmend",
      title: "Full-Stack Software Engineer Intern",
      duration: "June 2023–August 2023",
    },
    {
      logo: UTLogo,
      company: "UT Austin Meyer's Lab",
      title: "Data Analyst",
      duration: "Sept 2023–Dec 2023",
    },
  ];

  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
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
