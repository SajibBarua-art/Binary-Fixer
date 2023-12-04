import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const brandStyle = {
    color: 'rgb(5, 182, 182)',
    fontWeight: 900,
    fontSize: '30px',
    textDecoration: 'none',
  };

  const [navClass, setNavClass] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavClass('scrolled');
    } else {
      setNavClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${navClass}`}>
      <div className="container-fluid d-flex justify-content-between align-items-start">
        <div>
          <Link style={brandStyle} to='/home'>Binary Fixer</Link>
        </div>
        <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-style">
              <li className="nav-item">
                <ScrollLink
                  className="nav-link"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={scrollToTop}
                >
                  Home
                </ScrollLink>
              </li>
              {/* ... other menu items */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
