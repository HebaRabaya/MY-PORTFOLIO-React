import React from "react";
import Typing from "../../common/Typing";
import "./Hero.css";

export default function Hero() {
  const typingTexts = [
    "Passionate about web development",
    "Creating amazing user experiences",
    "Building the future with code",
    "Turning ideas into reality"
  ];

  return (
    <section className="main" id="home">
      <div className="slide-in-left">
        <h2>
          Hello, I'm Heba Rabaya <br />
          <span>
            Computer Science Student<br />
            at Arab American University
          </span>
        </h2>
        <h3>
          <Typing texts={typingTexts} speed={100} deleteSpeed={50} pauseTime={2000} />
        </h3>
        <a href="#projects" className="main-btn glow">
          View My Work
        </a>
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/heba-rabaya-a5ba03332"
            target="_blank"
            rel="noreferrer"
            className="floating"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/share/1CNQbehdNN/"
            target="_blank"
            rel="noreferrer"
            className="floating"
            style={{ animationDelay: '0.5s' }}
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://github.com/HebaRabaya"
            target="_blank"
            rel="noreferrer"
            className="floating"
            style={{ animationDelay: '1s' }}
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}


