import React, { useEffect } from 'react';
import './Bubble.css';

const Bubbles = () => {
  useEffect(() => {
    const container = document.querySelector('.bubble-container');
    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.width = `${Math.random() * 50 + 10}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
      container.appendChild(bubble);
    }
  }, []);

  return <div className="bubble-container"></div>;
};

export default Bubbles;
