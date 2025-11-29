import React from "react";
import { Link } from "react-router-dom";
import vector from "../images/vector.png";
import NavBar from "./NavBar";
import TextField from "./ContactForm";
import ContactForm from "./ContactForm";

function GetInTouch() {
  return (
    <section className="getInTouch-container">
      <div className="testimonials-container">
        <NavBar />
        <h1>Get In Touch</h1>
        <p className="testimonials-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="getInTouch-section">
        <ContactForm />
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
