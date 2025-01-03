import React, { useState, useEffect } from 'react';
import './Experience.css';
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

const ExperienceItem = ({ title, company, duration, description, skills, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Convert the description to bullet points
  const descriptionList = description.split('\n').map((item, index) => item.trim() && <li key={index}>{item}</li>);

  return (
    <div className={`experience-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="timeline-dot"></div>
      <div className="experience-content">
        <div className="experience-header">
          <div className="header-left">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h4>{company}</h4>
            </a>
            <span className="role" onClick={() => setIsExpanded(!isExpanded)}>{title}</span>
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
        {isExpanded && (
          <div className="experience-description">
            <ul>{descriptionList}</ul> {/* Display the bullet points */}
          </div>
        )}
        <div className="experience-toggle" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '◭' : '⧨'}
        </div>
      </div>
    </div>
  );
};


const TimelineExperience = () => {
  const experiences = [
    {
      title: 'Software Engineer Research Assistant',
      company: 'UMass Amherst - CICS',
      duration: 'May 2024 - Present',
      description: '• Developed and deployed a dynamic website Social Polls by SIMS Lab using React, Node.js, HTML, and CSS. Implemented an automated data updating system with cron jobs, integrated with GitHub for seamless updates and autodeployment via GitHub Pages, resulting in 98% uptime.\n• Designed and set up a large-scale academic experiment for 2000 participants, including creating a JavaScript browser extension to modify user feeds on platform X for data collection, achieving a 95% response rate from participants.\n• Built a Python-Flask backend to securely store and log user interactions in a MySQL database, ensuring session continuity and data traceability via cookies, processing over 600,000 user interactions per day.\n• Developed and maintained secure HTTPS web pages to guide participants, managed by an Nginx server for reliability, and analyzed user interaction data using data science tools, providing insights into user behavior for research.\n• Contributed to time series analysis of election polls, applying ARMA to forecast trends and predict future outcomes. \n• Worked on public opinion mining projects, analyzing social media poll data to gauge societal sentiment and trends, helping identify key opinion shifts in real time.',
      skills: ['React', 'Node.js', 'HTML', 'CSS', 'cron jobs','GitHub', 'GitHub Pages','JavaScript','Python','Flask','MySQL','cookies','HTTPS','Nginx','ARMA'],
      link: 'https://www.cics.umass.edu/',
    },
    {
      title: 'Software Engineer Intern',
      company: 'CryptCube',
      duration: 'May 2024 – Dec 2024',
      description: '• Developed around 10+ Spring Boot services to handle use cases like web scraping, sending DocuSign mails, making Bedrock calls, and integrating chat with Lex, improving process automation by 40%.\n• Assisted in developing libraries for CRUD operations in DynamoDB and OpenSearch, enhancing data management and improving caching response time by 35%.\n• Experimented with different parameters of OpenSearch to identify optimal configurations for specific use cases, improving search efficiency and response time by 30%.\n• Leveraged Titan embeddings, Apache Lucene, and NLP techniques to evaluate the accuracy of web-scraped documents, improving document processing accuracy by 45%.\n• Assisted in maintaining and improving a Kafka Lambda chain, enabling real-time data processing and monitoring Kafka health using Prometheus, leading to 60% faster issue detection.\n• Developed a mitigation database that enhanced the speed and quality of mitigation responses, reducing response times by 15%.',
      skills: ['Spring Boot', 'Bedrock', 'Lex', 'DynamoDB', 'OpenSearch', 'Titan embeddings', 'Apache Lucene','NLP', 'Apache Kafka', 'AWS Lambda', 'Prometheus'],
      link: 'https://www.linkedin.com/company/cryptcube/',
    },
    {
      title: 'Software Engineer Intern',
      company: 'Tata Institute of Fundamental Research',
      duration: 'Jul 2021 - Jul 2023',
      description: '\n• Developed a robust digitization system to preserve ancient Gujarati manuscripts, achieving an accuracy of 97.63% in converting typed newspaper text into an editable online machine format\n• Reduced training complexity by dividing text lines into three horizontal zones, cutting training classes from 564 to 79.\n• Designed and deployed a Django-based application with tools for annotation, dataset generation, model training, and testing at TIFR for large scale text digitization.\n• Modularized the codebase using OOP principles, enhancing scalability and maintainability.\n• Implemented OAuth2 and JWT authentication for secure access and user data protection.\n• Participated in agile development practices, contributing to sprints and iterative improvements.',
      skills: ['Django', 'OOP', 'Neural Networks', 'OAuth2', 'JWT authentication', 'YOLO', 'C++'],
      link: 'https://www.tifr.res.in/',
    },
    {
      title: "Deep Learning Engineer Intern",
      company: "Resolute AI",
      duration: "Jan 2022 - April 2022",
      description: "\n• Engineered advanced image preprocessing pipelines using OpenCV, enabling efficient feature extraction and improving model accuracy by 15%.\n• Developed and optimized YOLO-based object detection models to identify anomalies in real-time video streams.\n• Implemented a Django-based dashboard for visualizing data analysis results, enhancing usability for non-technical stakeholders.\n• Utilized C++ to accelerate computationally intensive image processing tasks, reducing execution time by 30%.\n• Designed and integrated secure authentication systems using OAuth2 and JWT, ensuring robust user data protection.\n• Analyzed large datasets to derive actionable insights, streamlining data annotation workflows for deep learning models.",
      skills: ["Django", "OOP", "Neural Networks", "OAuth2", "JWT authentication", "YOLO", "OpenCV", "Data Analysis", "C++"],
      link: "https://resoluteaisoftware.in/"
    },    
    {
      title: "Deep Learning Research Intern",
      company: "Pucho Inc",
      duration: "Jan 2017 - May 2018",
      description: "\n• Developed a real-time healthcare recommendation system utilizing TensorFlow and PyTorch, achieving 92% accuracy in predicting optimal treatments based on patient history.\n• Designed and implemented a custom KNN algorithm for personalized health recommendations, improving response time by 25%.\n• Fine-tuned YOLO-based object detection models to analyze medical imaging data, reducing false positives by 30%.\n• Converted deep learning models to TensorFlow Lite for deployment on low-power mobile devices, ensuring seamless performance.\n• Led the development of a feature extraction pipeline for unstructured medical records using Keras, enabling efficient preprocessing for model training.\n• Collaborated in an agile environment, contributing to sprint planning, code reviews, and iterative optimization.",
      skills: ["TensorFlow", "Keras", "PyTorch", "YOLO", "KNN", "TFLite"],
      link: "https://puchodigitalhealth.com/"
    }
    
  ];

  return (
    <div className="timeline-experience-section">
      <BubbleBackground />
      <header>
        <Navbar />
      </header>
      <h1 className="section-title">Professional Journey</h1>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default TimelineExperience;
