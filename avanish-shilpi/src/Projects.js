import React from "react";
import "./style/Projects.css";

const projects = [
  {
    title: "BridgeBill",
    description:
      "Engineered a web app that helps patients identify medical bill discrepancies by automating CPT code extraction & analysis using the American Medical Association API, achieving 76% accuracy in identifying discrepancies.",
    technologies: ["Angular", "JavaScript", "Flask", "REST API", "PostgreSQL", "AWS"],
  },
  {
    title: "Quant AI Trading Bot",
    description:
      "Developed an autonomous stock trading bot using Long Short-Term Memory (LSTM) networks to analyze high-frequency historical intraday stock data, achieving a 62% accuracy in predicting intraday stock trends.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MySQL",
      "Python",
      "TensorFlow",
    ],
  },
  {
    title: "Skin Cancer Detection",
    description:
      "Created a machine learning model to classify skin lesions with an ROC AUC score of 0.87, processing ISIC images. Designed and optimized a convolutional neural network (CNN) in PyTorch using hyperparameter tuning and data augmentation.",
    technologies: ["Python", "PyTorch", "Scikit-Learn"],
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="project-title">MY PROJECTS -</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ background: project.background }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="technologies-list">
              {project.technologies.map((tech, i) => (
                <li key={i} className="tech-tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
