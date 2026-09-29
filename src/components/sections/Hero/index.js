import React from "react";
import Typing from "../../common/Typing";
import AnimatedTitle from "../../common/AnimatedTitle";
import { profile } from "../../../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="main" id="home">
      <div className="hero-inner">
        <div className="hero-copy slide-in-left">
          <p className="hero-hello">Hello, I'm {profile.name}</p>
          <h2 className="hero-title">
            <AnimatedTitle lines={profile.titleLines} />
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
      </div>
    </section>
  );
}
