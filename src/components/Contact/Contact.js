import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="cards contact" id="contact">
      <h2 className="title">Let's work together</h2>
      <div className="contant">
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-phone-flip"></i>
          </div>
          <div className="info">
            <h3>Phone</h3>
            <p>+972500000000</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="info">
            <h3>Email</h3>
            <p>h.rabaya7@student.aaup.ps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
