import React from "react";
import { Link } from "react-router-dom";
import vector from "../images/vector.png";
import NavBar from "./NavBar";

function GetInTouch() {
  return (
    <section className="getInTouch-container">
      <div className="testimonials-container">
        {/* <button className="nav-btn">
          <div className="testimonials-link">
            <Link to="/">Home</Link>
            <Link to="/Case Studies">Case Studies</Link>
            <Link to="/Testimonials">Testimonials</Link>
            <Link to="/Recent Work">Recent Work</Link>
            <Link to="/Get In Touch">Get In Touch</Link>
          </div>
        </button> */}

        <NavBar />

        <h1>Get In Touch</h1>
        <p className="testimonials-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="getInTouch-section">
        <div className="email-section">
          <p>Email</p>
          <button className="email-section-btn">Please enter your email</button>
        </div>

        <div className="mobile-section">
          <p>Mobile</p>
          <button className="mobile-section-btn">Enter mobile</button>
        </div>

        <div className="message-section">
          <p>Message</p>
          <button className="message-section-btn">Enter your message</button>
        </div>

        <button className="submit-btn">
          Submit
          <img className="vector-icon" src={vector} alt="VectorImg" />
        </button>
      </div>

      <div className="footer-text">Made with ❤️</div>
    </section>
  );
}

export default GetInTouch;
