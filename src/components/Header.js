import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/CC.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper for Enter/Space key activation
  const handleKeyToggle = (callback) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      callback(e);
    }
    if (e.key === "Escape") {
      setOpenDropdown(null);
      if (isMobile) setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (prev) setOpenDropdown(null); // close dropdowns when closing menu
      return !prev;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const dropdowns = {
    Guitars: ["Acoustic", "Electric", "Bass"],
    Percussion: ["Drums", "Cymbals"],
    Band: ["Na"],
    Sound: ["Equipment"],
    Attire: ["Shirts"],
    Rentals: ["Instrument Rentals"],
    Repairs: ["Info"],
    Lessons: ["All Lessons"],
  };

  return (
    <header className="header">
      <div className="header-top-row">
        <div className="logo-title">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
      </div>

      <div className="header-slogan">YES WE HAVE STRINGS!</div>
      <div className="header-submessage">
        A music store dedicated to serving <br /> musicians of ALL ages and
        skill levels!
      </div>
      {isMobile && (
        <div className="phone-numberMobile">Call us at (985) 288-0051</div>
      )}

      <nav>
        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle menu"
          tabIndex={0}
          onKeyDown={handleKeyToggle(toggleMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>

          {Object.entries(dropdowns).map(([category, items]) => (
            <li
              key={category}
              className={`dropdown ${openDropdown === category ? "open" : ""}`}
            >
              <a
                href={`#${category}`}
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown((prev) =>
                    prev === category ? null : category
                  );
                }}
                aria-expanded={openDropdown === category}
                aria-haspopup="true"
                tabIndex={0}
                onKeyDown={handleKeyToggle((e) => {
                  e.preventDefault();
                  setOpenDropdown((prev) =>
                    prev === category ? null : category
                  );
                })}
              >
                {category}
              </a>
              <ul className="dropdown-menu">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
