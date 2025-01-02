import React, { useState, useEffect } from 'react';
import './ProfileSection.css';
import yashikaImage from '../assets/yashika.jpeg';

const ProfileSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi! I’m Yashika, a Master’s student in Computer Science at UMass Amherst and a passionate software engineer. I specialize in full-stack development, cloud technologies, and machine learning, with projects spanning real-time systems and AI-driven solutions. Outside of coding, I love exploring nature and tackling challenges that blend technology with real-world impact.  Welcome to my corner of the web—let’s connect and create something amazing!";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const textArray = fullText.split('');
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex < textArray.length - 1) {
          setDisplayText(prevText => prevText + textArray[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 30); // Adjust speed here (lower number = faster typing)
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="profile-section">
      <img src={yashikaImage} alt="Profile" className="profile-image" />
      <h1 className="profile-name">Yashika Jaya Kuckian</h1>
      <p className="profile-description">
        {displayText}
        <span className={`cursor ${isTypingComplete ? 'blink' : ''}`}>|</span>
      </p>
    </div>
  );
};

export default ProfileSection;