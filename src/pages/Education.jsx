import React, { useState, useEffect } from 'react';
import './Education.css';
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

const EducationItem = ({ degree, school, duration, description, skills, link, isMaster }) => {
  // Convert the description to bullet points
  const descriptionList = description.split('\n').map((item, index) => item.trim() && <li key={index}>{item}</li>);

  return (
    <div className={`education-item ${isMaster ? 'left' : 'right'}`}>
      <div className="timeline-dot"></div>
      <div className="education-content">
        <div className="education-header">
          <div className="header-left">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h4>{school}</h4>
            </a>
            <span className="degree">{degree}</span>
          </div>
          <div className="header-right">
            <span className="duration">{duration}</span>
          </div>
        </div>
        <div className="skills-preview">
          {skills.map((skill, index) => (
            <span key={index} className="skill">{skill}</span>
          ))}
        </div>
        <div className="education-description">
          <ul>{descriptionList}</ul> {/* Display the bullet points */}
        </div>
      </div>
    </div>
  );
};


const TimelineEducation = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'University of Massachusetts Amherst',
      duration: 'Sept 2023 - Aug 2025',
      description: 'Assist in teaching and grading for COMPSCI 515: Algorithms, Game Theory, and Fairness at Manning College of Information and Computer Sciences, UMass Amherst, from September 2024 to December 2024.',
      skills: ['Advanced Machine Learning', 'Algorithms for Data Science', 'Distributed Systems', 'Advanced Algorithms', ' Methods of Applied Statistics', 'Independent Study', 'Decarbonization using Data Science', 'Data Science using R', 'Natural Language Processing'],
      link: 'https://www.umass.edu/',
      isMaster: false, // Master's degree
    },
    {
      degree: 'Bachelor of Engineering in Information Technology',
      school: 'Mumbai University',
      duration: 'Aug 2019 - May 2023',
      description: 'Organized and led workshops and webinars to enhance students technical skills and knowledge at CSI FCRIT-IT from August 2021 to July 2022.',
      skills: ['Artificial Intelligence', 'Data Science', 'Algorithms and Data Structures', 'Operating Systems', 'Computer Network and Security', 'Database and Management Systems', 'Parallel Computing', 'Compilers', 'DevOps', 'Advanced DevOps - AWS'],
      link: 'https://www.xyzuniversity.edu/',
      isMaster: true, // Bachelor's degree
    },
  ];

  return (
    <div className="timeline-education-section">
      <BubbleBackground />
      <header>
        <Navbar />
      </header>
      <h2 className="section-title">Education</h2>
      <div className="timeline-container">
        {education.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TimelineEducation;
