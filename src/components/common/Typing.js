import React, { useState, useEffect } from 'react';

export default function TypingEffect({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[index];
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="typing-text">
      {text}
      <span className="cursor">|</span>
    </span>
  );
}


