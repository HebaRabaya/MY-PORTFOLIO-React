import React, { useState } from "react";
import Typing from "../../common/Typing";
import AnimatedTitle from "../../common/AnimatedTitle";
import { profile } from "../../../data/portfolio";
import "./Hero.css";

export default function Hero() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, x: 0, y: 0 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: py * -9,
      ry: px * 14,
      x: px * 28,
      y: py * 18,
    });
  };

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0, x: 0, y: 0 });
  };

  return (
    <section
      className="main"
      id="home"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="hero-orb hero-orb--a" aria-hidden="true" />
      <div className="hero-orb hero-orb--b" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-scene" aria-hidden="true">
        <div
          className="hero-photo"
          style={{
            transform: `translate3d(${tilt.x * 0.35}px, ${tilt.y * 0.35}px, 0) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(1.06)`,
          }}
        />
        <span
          className="hero-chip hero-chip--code"
          style={{
            transform: `translate3d(${tilt.x * 0.9}px, ${tilt.y * 0.7}px, 40px)`,
          }}
        >
          {"</>"}
        </span>
        <span
          className="hero-chip hero-chip--brace"
          style={{
            transform: `translate3d(${tilt.x * -0.55}px, ${tilt.y * 0.95}px, 60px)`,
          }}
        >
          {"{ }"}
        </span>
        <span
          className="hero-chip hero-chip--api"
          style={{
            transform: `translate3d(${tilt.x * 1.1}px, ${tilt.y * -0.5}px, 50px)`,
          }}
        >
          API
        </span>
        <div
          className="hero-ring"
          style={{
            transform: `translate3d(${tilt.x * 0.4}px, ${tilt.y * 0.4}px, 0) rotateX(${18 + tilt.rx}deg) rotateY(${-16 + tilt.ry}deg)`,
          }}
        />
      </div>

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
