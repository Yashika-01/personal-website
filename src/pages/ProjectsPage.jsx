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
        title: "E-Commerce Platform",
        skills: ["React", "Node.js", "MongoDB", "Express"],
        githubLink: "https://github.com/username/project",
        description: "A full-stack e-commerce platform with features including user authentication, product management, shopping cart, and payment integration using Stripe."
      },
      {
        title: "AI Image Generator",
        skills: ["Python", "TensorFlow", "Flask", "AWS"],
        githubLink: "https://github.com/username/project2",
        description: "An AI-powered image generation tool that creates unique artwork using deep learning models. Includes features for style transfer and image manipulation."
      },
      {
        title: "AI Image Generator",
        skills: ["Python", "TensorFlow", "Flask", "AWS"],
        githubLink: "https://github.com/username/project2",
        description: "An AI-powered image generation tool that creates unique artwork using deep learning models. Includes features for style transfer and image manipulation."
      },
      {
        title: "AI Image Generator",
        skills: ["Python", "TensorFlow", "Flask", "AWS"],
        githubLink: "https://github.com/username/project2",
        description: "An AI-powered image generation tool that creates unique artwork using deep learning models. Includes features for style transfer and image manipulation."
      },
      {
        title: "AI Image Generator",
        skills: ["Python", "TensorFlow", "Flask", "AWS"],
        githubLink: "https://github.com/username/project2",
        description: "An AI-powered image generation tool that creates unique artwork using deep learning models. Includes features for style transfer and image manipulation."
      },
      {
        title: "AI Image Generator",
        skills: ["Python", "TensorFlow", "Flask", "AWS"],
        githubLink: "https://github.com/username/project2",
        description: "An AI-powered image generation tool that creates unique artwork using deep learning models. Includes features for style transfer and image manipulation."
      },
      {
        title: "AI Image Generator",
        skills: ["Python", "TensorFlow", "Flask", "AWS"],
        githubLink: "https://github.com/username/project2",
        description: "An AI-powered image generation tool that creates unique artwork using deep learning models. Includes features for style transfer and image manipulation."
      },
      {
        title: "AI Image Generator",
        skills: ["Python", "TensorFlow", "Flask", "AWS"],
        githubLink: "https://github.com/username/project2",
        description: "An AI-powered image generation tool that creates unique artwork using deep learning models. Includes features for style transfer and image manipulation."
      },
      {
        title: "Task Management System",
        skills: ["Vue.js", "Firebase", "Tailwind CSS"],
        githubLink: "https://github.com/username/project3",
        description: "A collaborative task management system with real-time updates, drag-and-drop functionality, and team collaboration features."
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