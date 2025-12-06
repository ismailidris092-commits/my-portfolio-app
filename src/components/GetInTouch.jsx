import React from "react";
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";

function GetInTouch() {
  return (
    <section className="getInTouch-container">
      <NavBar />
      <div className="getInTouch-section">
        <h1>Get In Touch</h1>
        <p className="getInTouch-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div>
        <ContactForm />
      </div>

      <div className="footer-text">Made with ❤️</div>
    </section>
  );
}

export default GetInTouch;
