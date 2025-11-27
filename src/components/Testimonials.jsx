import React from "react";
import { Link } from "react-router-dom";
import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";
import client4 from "../images/client4.png";

function Testimonials() {
  return (
    <>
      <div className="testimonials-container">
        <div className="home-link">
          <Link to="/">Home</Link>
        </div>
        <h1>Testimonials</h1>
        <p className="testimonials-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <section className="client-section1">
        <div className="client1-container"> 
          <p className="client1-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="client1-Img-section">
            <img src={client1} alt="Client 1" />
            <h2>Client Name</h2>
          </div>
        </div>

        <div className="client2-container">
          <p className="client1-para">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div className="client2-Img-section">
            <img src={client2} alt="Client 2" />
            <h2>Client Name</h2>
          </div>
        </div>
      </section>

      <section className="client-section2">
        <div className="client3-container">
          <p className="client3-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="client3-Img-section">
            <img src={client3} alt="Client 3" />
            <h2>Client Name</h2>
          </div>
        </div>

        <div className="client4-container">
          <p className="client4-para">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div className="client4-Img-section">
            <img src={client4} alt="Client 4" />
            <h2>Client Name</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
