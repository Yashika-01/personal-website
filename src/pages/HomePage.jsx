import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProfileSection from '../components/ProfileSection';
import InfoCard from '../components/InfoCard';
import { Code, Briefcase, GraduationCap, BookOpen } from 'lucide-react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';






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

// Original HomePage component - unchanged
const HomePage = () => (

  <div className="homepage">
    <BubbleBackground />
    <header>
      <Navbar />
    </header>
    <ProfileSection />
    <div className="info-cards">
      <InfoCard icon={<Code />} title="Projects" description="Explore my creative side through collection of projects that showcase my skills and passion." color="blue" />
      <InfoCard icon={<Briefcase />} title="Experience" description="Dive into my professional journey, where I bring expertise, leadership, and problem-solving to every challenge." color="purple" />
      <InfoCard icon={<GraduationCap />} title="Education" description="Learn about the academic milestones that have shaped my career, from foundation to specialization." color="pink" />
      <InfoCard icon={<BookOpen />} title="Publications" description="Discover my contributions to the field through research, articles, and publications that share knowledge and inspire." color="cyan" />
    </div>
  </div>
);

export default HomePage;