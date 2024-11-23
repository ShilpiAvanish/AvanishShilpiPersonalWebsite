import React from "react";
import "./style/Projects.css";

const projects = [
  {
    title: "Android & iOS Apps",
    description: "Development of 3 cross-platform mobile apps made with Apache Cordova.",
    links: [
      { name: "Canary Enjoy", url: "#" },
      { name: "Gabbeach App", url: "#" },
      { name: "Pensione Alicante App", url: "#" },
    ],
    technologies: ["Android", "iOS", "Apache Cordova", "PHP"],
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
  },
  {
    title: "E-Commerce Websites",
    description:
      "Development and maintenance of 3 e-commerce websites powered by CodeIgniter.",
    links: [
      { name: "pistasta.it", url: "#" },
      { name: "sicilyprodottitipici.it", url: "#" },
      { name: "donoccasion.es", url: "#" },
    ],
    technologies: ["PHP", "CodeIgniter", "MySQL"],
    background: "linear-gradient(to right, #9f00ff, #ff9a00)",
  },
  {
    title: "Blogs & Landings",
    description:
      "Development of 2 blogs and this portfolio. Used Nuxt.js (Vue) & Webpack.",
    links: [
      { name: "ambidestro.it", url: "#" },
      { name: "pnzdevs.com", url: "#" },
      { name: "tiapnn.netlify.app", url: "#" },
    ],
    technologies: ["Node.js", "Vue.js", "Webpack"],
    background: "linear-gradient(to right, #ff6a00, #ee0979)",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ background: project.background }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
