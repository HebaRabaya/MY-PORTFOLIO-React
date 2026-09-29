import React from "react";
import Typing from "../../common/Typing";
import { profile } from "../../../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="main" id="home">
      <div className="slide-in-left">
        <h2>
          Hello, I'm {profile.name} <br />
          <span>{profile.title}</span>
        </h2>
        <h3>
          <Typing
            texts={profile.typingTexts}
            speed={100}
            deleteSpeed={50}
            pauseTime={2000}
          />
        </h3>
        <a href="#projects" className="main-btn glow">
          View My Work
        </a>
        <div className="social-icons">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="floating"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="floating"
            style={{ animationDelay: "1s" }}
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
