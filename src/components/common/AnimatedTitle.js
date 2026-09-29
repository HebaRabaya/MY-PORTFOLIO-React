import React, { useEffect, useState } from "react";

export default function AnimatedTitle({ lines, speed = 55 }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const current = lines[lineIndex];
    if (charCount < current.length) {
      const timer = setTimeout(() => setCharCount((count) => count + 1), speed);
      return () => clearTimeout(timer);
    }

    if (lineIndex < lines.length - 1) {
      const timer = setTimeout(() => {
        setLineIndex((index) => index + 1);
        setCharCount(0);
      }, 260);
      return () => clearTimeout(timer);
    }

    setDone(true);
  }, [charCount, done, lineIndex, lines, speed]);

  return (
    <>
      {lines.map((line, index) => {
        const shown =
          index < lineIndex
            ? line
            : index === lineIndex
              ? line.slice(0, charCount)
              : "";
        const showCursor = index === lineIndex || (done && index === lines.length - 1);

        return (
          <span className="hero-title-line" key={line}>
            {shown}
            {showCursor && <span className="cursor">|</span>}
          </span>
        );
      })}
    </>
  );
}
