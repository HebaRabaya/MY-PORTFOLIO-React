import React from "react";
import { profile } from "../../data/portfolio";
import "./Contact.css";

export default function Contact() {
  const contactItems = [
    {
      icon: "fa-solid fa-envelope",
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: "fa-brands fa-linkedin",
      label: "LinkedIn",
      value: "Heba Rabaya",
      href: profile.socials.linkedin,
    },
    {
      icon: "fa-brands fa-github",
      label: "GitHub",
      value: "HebaRabaya",
      href: profile.socials.github,
    },
  ];

  return (
    <section className="contact" id="contact">
      <h2 className="title">Let's work together</h2>

      <div className="contact-grid">
        {contactItems.map((item) => (
          <a
            key={item.label}
            className="contact-card"
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-card__icon">
              <i className={item.icon}></i>
            </div>
            <div className="contact-card__info">
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
