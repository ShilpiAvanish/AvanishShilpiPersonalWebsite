import React from "react";
import "./style/Projects.css";
import VerdenskImg from "./images/verdensk3.png";
import InternNestImg from "./images/internnest.png";
import BridgeBillImg from "./images/bridgebill.png";

const projects = [
  {
    title: "Verdensk AI",
    date: "2024 - Present",
    description:
      "AI-powered grant matching engine to enable CPAs to recommend grants, tax credits, and subsidies for farmers",
    image: VerdenskImg,
  },
  {
    title: "InternNest",
    date: "2024",
    description:
      "Built a full-stack web app to help interns find roommates and housing in new cities; implemented user profiles, map-based listings, and matching logic using Next.js, Firebase, and Tailwind CSS.",
    image: InternNestImg,
  },
  {
    title: "BridgeBill",
    date: "2024 - Present",
    description:
      "Engineered a web app that helps patients identify medical bill discrepancies by automating CPT code extraction & analysis using the American Medical Association API, achieving 76% accuracy in identifying discrepancies.",
    image: BridgeBillImg,
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="project-title">MY PROJECTS -</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-row" key={index}>
            <div className="project-info">
              <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="project-meta">
                <h3 className="project-name">{project.title}</h3>
                <div className="project-date">{project.date}</div>
                <div className="project-description">{project.description}</div>
                <div className="project-divider"></div>
              </div>
            </div>
            <div className="project-image-container">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title + ' screenshot'}
                  className="project-image"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
