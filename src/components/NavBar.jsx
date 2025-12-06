import React from "react";
import linkedIn from "../images/linkedIn.png";
import behance from "../images/behance.png";
import twitter from "../images/twitter.png";
import iconHamburger from "../images/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div className="nav-body">
      <nav className="nav-container">
        <button onClick={toggleMenu} className="hamburger-icon">
          <img src={iconHamburger} alt="icon-hamburger" />
        </button>

        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/About Me">About Me</Link>
          <Link to="/Recent Works">Recent Works</Link>
          <Link to="/Reviews">Reviews</Link>
          <Link to="/Get In Touch">Get In Touch</Link>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="nav-link-mobile">
            <Link to="/">Home</Link>
            <Link to="/About Me">About Me</Link>
            <Link to="/Recent Works">Recent Works</Link>
            <Link to="/Reviews">Reviews</Link>
            <Link to="/Get In Touch">Get In Touch</Link>
          </div>
        )}

        <div className="nav-logo-container">
          <img className="logo" src={linkedIn} alt="linkedIn" />
          <img className="logo" src={behance} alt="behance" />
          <img className="logo" src={twitter} alt="twitter" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
