import React, { useState, useEffect } from 'react';
import "./Publication.css";
import Navbar from '../components/Navbar';

const Bubble = ({ size, duration, delay, initialPosition }) => (
  <div
    className="bubble"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${initialPosition.x}%`,
      bottom: `-${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    }}
  />
);

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 45 }).map((_, i) => ({
        id: i,
        size: Math.random() * 60 + 20,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * -20,
        initialPosition: {
          x: Math.random() * 100,
        },
      }));
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}
    </div>
  );
};


const Publication = () => {
  const publications = [
    {
      title: "GTReZ - Gujarati Text Recognition using Zone Segmentation",
      authors: "Yashika Kuckian, et al.",
      publisher: "IEEE Explore",
      year: 2023,
      link: "https://ieeexplore.ieee.org/document/10126263", // Replace with the actual link
    },
    {
      title: "ATM Security System Using Gesture and Hand Vein Recognition",
      authors: "Yashika Kuckian, et al.",
      publisher: "Springer",
      year: 2023,
      link: "https://link.springer.com/chapter/10.1007/978-3-031-13150-9_28", // Replace with the actual link
    },
  ];

  return (
    <div className="publication-container">
        <BubbleBackground />
      <header>
        <Navbar />
      </header>
      <h2 className="publication-title">Publications</h2>
      <div className="publication-grid">
        {publications.map((pub, index) => (
          <div className="publication-card" key={index}>
            <h3 className="publication-card-title">{pub.title}</h3>
            <p className="publication-authors">{pub.authors}</p>
            <p className="publication-details">
              Published by <strong>{pub.publisher}</strong>, {pub.year}
            </p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              Link to {pub.publisher === "Springer" ? "Chapter" : "Paper"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publication;
