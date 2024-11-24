import React from "react";
import "./style/LandingPage.css"; // Updated path to CSS
import StarWarsImage from "./images/starwarsnew.png"; // Replace with your actual image file path

export default function LandingPage() {
  return (
    <section id="landing-page" className="landing-page">
      <div className="text-section">
        <p className="greeting">HELLO THERE 👋, I'm</p>
        <h1 className="name">Avanish Shilpi</h1>
        <h2 className="role">SOFTWARE ENGINEER</h2>
        <p className="description">
         JavaScript • Python • React • Django • Apache Kafka • MySQL • AWS <b/>
         Computer Science at University of Texas at Austin 🤘
        </p>
    
        <button
          className="cta-button"
          onClick={() => window.open("https://example.com/your-cv.pdf", "_blank")}
        >
          CHECK OUT MY CV!
        </button>
      </div>
      <div className="image-section">
        <img src={StarWarsImage} alt="Star Wars Art" className="star-wars-image" />
      </div>
    </section>
  );
}
