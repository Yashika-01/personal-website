  import React from 'react';
  import Navbar from '../components/Navbar';
  import ProjectCard from './ProjectCard';
  import { useEffect, useState } from 'react';

  // New Bubble Components
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

  const ProjectsPage = () => {
    const projects = [
      {
        title: "ATM Security System using Gesture and Hand Vein Recognition",
        skills: ["Python", "Raspberry Pi", "Gesture Recognition", "Image Processing"],
        githubLink: "https://github.com/Yashika-01/ATMSECURITY", 
        description: "An advanced security system for ATMs integrating gesture-based PIN entry and hand vein recognition for secure and accessible user authentication. The project leverages Python for system logic, Raspberry Pi for hardware integration, and image processing for vein recognition."
      },      
      {
        title: "Social Polls Analysis Platform",
        skills: ["Python", "Data Analysis", "Machine Learning", "Web Development"],
        githubLink: "https://socialpolls.org/", 
        description: "A research platform developed by the SIMS Lab at UMass Amherst, dedicated to analyzing informal polls published on social media platforms like X (formerly Twitter). The platform examines biases in social media polls, their accuracy compared to traditional polling methods, and their potential influence on public discourse, particularly in the context of U.S. presidential elections."
      },      
      {
        title: "Personal Portfolio Website",
        skills: ["HTML", "CSS", "JavaScript", "React", "Web Design"],
        githubLink: "https://github.com/Yashika-01/personal-website", // Replace with the actual GitHub repository link
        description: "A personal portfolio website showcasing professional projects, skills, and achievements. Designed to provide visitors with an intuitive and aesthetically pleasing user experience, it features responsive design, dynamic content, and seamless navigation to highlight expertise in software development and technology."
      },      
      {
        title: "Code Summarization and Evaluation System",
        skills: ["Python", "Node.js", "MongoDB", "Hugging Face", "Machine Learning", "React"],
        githubLink: "https://github.com/AKSHATA-22/520",
        description: "A sophisticated system designed to generate and evaluate natural language summaries of source code. This tool supports user authentication, multi-role login, and administrative user management. It integrates advanced machine learning models from Hugging Face for accurate code summarization and features an interactive evaluation system with graphical feedback for summaries rated on naturalness, usefulness, and consistency. Includes a full-stack implementation with a React frontend, Node.js backend, and Python API for summarization."
      },
      {
        title: "GTReZ - Gujarati Text Recognition",
        skills: ["Python", "Deep Learning", "YOLOv5", "Django", "AWS"],
        githubLink: "https://yashika-01.github.io/TIFRwebsite/",
        description: "GTReZ focuses on digitizing and recognizing Gujarati text from manuscripts using advanced techniques like zone segmentation and deep learning models. The system achieves high accuracy and efficiency in recognizing complex scripts and modifiers unique to the Gujarati language, with potential future enhancements including support for handwritten scripts and other fonts."
      },      
      {
        "title": "Missing Person Tracker",
        "skills": ["Python", "OpenCV", "TensorFlow", "Flask", "AWS"],
        "githubLink": "https://github.com/CYBE-SPH2021/Missing-Person-Tracker/",
        "description": "A system designed to track and identify missing persons through facial recognition and real-time video analysis using deep learning models and computer vision techniques."
    }
    ];

    return (
      <div className="project">
        <BubbleBackground />
        <Navbar />
        <h1 className="project-titles">My Projects</h1>
        <div className="container mx-auto px-4 py-20">
          <div className="grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default ProjectsPage;