import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Intro
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                intro
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/skills"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AD" className="nav-links" onClick={closeMobileMenu}>
                A/D
              </Link>
            </li>

            <li>
              <Link
                to="/Uni"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Uni
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Uni</Button>}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
