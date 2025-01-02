// InfoCard.js
import React from 'react';
import './InfoCard.css';
import { useNavigate } from 'react-router-dom';

const InfoCard = ({ icon, title, description, color }) =>{

  const navigate = useNavigate(); // Get the navigate function

  const handleClick = () => {
    if (title === 'Projects') {
      navigate('/projects'); 
    }
    if (title === 'Experience') {
      navigate('/experience');
    }
    if (title === 'Education') {
      navigate('/education')
    }
    if (title === 'Publications'){
      navigate('/publications')
    }
  };

  return(
    <div className="info-card" onClick={handleClick}>
      <div className={`info-card-icon ${color}-color`}>{icon}</div>
      <h2 className="info-card-title">{title}</h2>
      <p className="info-card-description">{description}</p>
    </div>
  );
};

export default InfoCard;
