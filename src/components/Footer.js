import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const handleHomeClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <p>© 2025 Christy's Lagniappe Music. All rights reserved.</p>
      <p>Web Design by Jonah Cheadle</p>
      <a href="#top" className="back-to-top">
        ↑ Back to Top
      </a>
      <Link to="/" onClick={handleHomeClick} className="home">
        Home
      </Link>
    </footer>
  );
};

export default Footer;
