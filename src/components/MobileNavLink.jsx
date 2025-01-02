import React from 'react';
import './MobileNavLink.css';

const MobileNavLink = ({ href, target, rel, icon, text }) => {
  return (
    <a href={href} target={target} rel={rel} className="mobile-nav-link">
      {icon}
      <span>{text}</span>
    </a>
  );
};


export default MobileNavLink;
