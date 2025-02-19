import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Mail, Home } from 'lucide-react';
import MobileNavLink from './MobileNavLink';
import Navlink from './NavLink';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <span className="navbar-logo">Portfolio</span>
        <div className="navbar-links">
          <Navlink
            href="#/"
            icon={<Home />}
            text="Home"
          />
          <Navlink
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            icon={<FileText />}
            text="Resume"
          />
          <Navlink
            href="https://github.com/Yashika-01"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Github />}
            text="GitHub"
          />
          <Navlink
            href="https://www.linkedin.com/in/yashika-kuckian-687152214/"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Linkedin />}
            text="LinkedIn"
          />
          <Navlink
            href="mailto:yashikakuckian2001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Mail />}
            text="Email"
          />
        </div>
        <div
          className="navbar-menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="mobile-nav"
          style={{
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          }}
        >
          <MobileNavLink
            href="#/"
            icon={<Home />}
            text="Home"
            onClick={closeMenu} // Close the menu when clicking "Home"
          />
          <MobileNavLink
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            icon={<FileText />}
            target="_blank"
            rel="noopener noreferrer"
            text="Resume"
            onClick={closeMenu}
          />
          <MobileNavLink
            href="https://github.com/Yashika-01"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Github />}
            text="GitHub"
            onClick={closeMenu}
          />
          <MobileNavLink
            href="https://www.linkedin.com/in/yashika-kuckian-687152214/"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Linkedin />}
            text="LinkedIn"
            onClick={closeMenu}
          />
          <MobileNavLink
            href="mailto:yashikakuckian2001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Mail />}
            text="Email"
            onClick={closeMenu}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
