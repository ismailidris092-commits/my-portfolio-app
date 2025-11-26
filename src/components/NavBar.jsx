import React from "react";
import linkedIn from "../images/linkedIn.png";
import behance from "../images/behance.png";
import twitter from "../images/twitter.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <button className="nav-btn">
      <nav className="nav-container">
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/Case Studies">Case Studies</Link>
          <Link to="/Testimonials">Testimonials</Link>
          <Link to="/Recent Work">Recent Work</Link>
          <Link to="/Get In Touch">Get In Touch</Link>
        </div>

        <div className="nav-thumbnail-container">
          <img className="thumbnail" src={linkedIn} alt="linkedIn" />
          <img className="thumbnail" src={behance} alt="behance" />
          <img className="thumbnail" src={twitter} alt="twitter" />
        </div>
      </nav>
    </button>
  );
}

export default NavBar;
