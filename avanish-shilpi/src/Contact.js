import React from "react";
import "./style/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <div className="contact-card">
        <img
          src="https://via.placeholder.com/100"
          alt="profile"
          className="contact-image"
        />
        <div className="contact-info">
          <h3>Avanish Shilpi</h3>
          <p>Email: avanish.shilpi@utexas.edu</p>
          <p>Phone: +1 832-928-2486</p>
          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
