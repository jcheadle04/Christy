import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/CC.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

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

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) setOpenDropdown(null); // Close dropdowns when closing menu
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  const toggleDropdown = (name, e) => {
    e.preventDefault();

    if (isMobile) {
      // On mobile: toggle current dropdown only
      setOpenDropdown((prev) => (prev === name ? null : name));
    } else {
      // On desktop: optional - open dropdown on click and close others
      setOpenDropdown((prev) => (prev === name ? null : name));
    }
  };

  // Close dropdown if clicking outside (optional, adds better UX)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector("nav");
      if (nav && !nav.contains(event.target)) {
        setOpenDropdown(null);
        if (isMobile) setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile]);

  const dropdowns = {
    Guitars: ["Acoustic", "Electric", "Bass"],
    Percussion: ["Drums", "Cymbals", "Tambourine"],
    Band: ["Members", "Schedule"],
    Sound: ["Mixing", "Equipment"],
    Attire: ["Stage", "Casual"],
    Rentals: ["Veritas", "Other"],
    Repairs: ["Info"],
    Lessons: ["Bill", "Susan", "TBA"],
  };

  return (
    <header className="header">
      <div className="header-top-row">
        <div className="location">2306 Front St STE 5, Slidell, LA</div>

        <div className="logo-title">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        <div className="hours">
          <div className="hours-title">Store Hours</div>
          <div className="hours-list">
            <div>Mon: 10am - 6pm</div>
            <div>Tues: 10am - 6pm</div>
            <div>Wed: 10am - 7pm</div>
            <div>Thurs: 10am - 6pm</div>
            <div>Fri: 10am - 6pm</div>
            <div>Sat: 10am - 5pm</div>
            <div>Sun: Closed</div>
          </div>
        </div>
      </div>

      <div className="header-slogan">YES WE HAVE STRINGS!</div>
      <div className="header-submessage">
        A music store dedicated to serving <br /> musicians of ALL ages and
        skill levels!
      </div>

      <nav>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleMenu();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#" className="nav-link" onClick={scrollToTop}>
              Home
            </a>
          </li>

          {Object.entries(dropdowns).map(([category, items]) => (
            <li
              key={category}
              className={`dropdown ${openDropdown === category ? "open" : ""}`}
            >
              <a
                href={`#${category}`}
                className="nav-link dropdown-toggle"
                onClick={(e) => toggleDropdown(category, e)}
                aria-expanded={openDropdown === category}
                aria-haspopup="true"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleDropdown(category, e);
                  }
                }}
              >
                {category}
                <span className="arrow" aria-hidden="true">
                  ▼
                </span>
              </a>
              <ul className="dropdown-menu">
                {items.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={closeMenu}>
                      {item}
                    </a>
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
