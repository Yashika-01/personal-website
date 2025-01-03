import React from 'react';
import './MobileNavLink.css';

const MobileNavLink = ({ href, target, rel, icon, text, onClick }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="mobile-nav-link"
      onClick={onClick}  // Add onClick prop here
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default MobileNavLink;
