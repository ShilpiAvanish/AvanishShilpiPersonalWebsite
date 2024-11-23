import React from "react";
import "./style/Achievements.css";

const achievements = [
  {
    title: "FreeCodeCamp",
    description: "Completed 1800+ hours of coursework for Full-Stack Certification.",
    highlights: [
      "Responsive Web Design Certification",
      "JavaScript Algorithms and Data Structures Certification",
      "Front End Libraries Certification",
      "APIs and Microservices Certification",
      "Quality Assurance Certification",
    ],
    background: "linear-gradient(to right, #ffcc00, #ff9a00)",
  },
  {
    title: "CodersRank",
    description: "Top 4% in Worldwide Rankings",
    stats: ["Top 50 SCSS", "Top 50 HTML", "Top 100 CSS"],
    background: "linear-gradient(to right, #66ff66, #33cc33)",
  },
  {
    title: "10fastfingers",
    description: "Typing Test Score: 81 WPM",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
  },
];

export default function Achievements() {
  return (
    <section className="achievements-section">
      <h2>My Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="achievement-card"
            style={{ background: achievement.background }}
          >
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            {achievement.highlights && (
              <ul>
                {achievement.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {achievement.stats && (
              <div className="stats">
                {achievement.stats.map((stat, i) => (
                  <span key={i}>{stat}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
