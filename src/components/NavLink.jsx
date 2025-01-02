import React from 'react';
import './Navlink.css';

const Navlink = ({ href, target, rel, icon, text }) => {
  return (
    <a href={href} target={target} rel={rel} className="nav-link">
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default Navlink;
