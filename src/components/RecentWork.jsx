import React from "react";
import { Link } from "react-router-dom";
import sunnyside from "../images/sunnyside.jpg";
import profitPredictor from "../images/profitPredictor.png";
import vector from "../images/vector.png";
import NavBar from "./NavBar";

export default function RecentWork() {
  return (
    <>
      <NavBar />
      <div className="recent-work-container">
        <h1>Recent Work</h1>
        <p className="recent-work-para">
          Solving user and business problems for over 15 years. Pain itself is
          something to be avoided; in seeking pleasure we may encounter effort
          and hardship, but these experiences can also bring meaningful
          outcomes.
        </p>
      </div>

      <div className="recentworkImg-container">
        <img
          className="recentWorkImg1"
          src={sunnyside}
          alt=" Recent work Img1"
        />
        <img src={profitPredictor} alt=" Recent work Img2" />
      </div>

      <section className="work-name-container">
        <div className="work-name-section1">
          <h2 className="work-name">Sunnyside Project</h2>
          <p className="work-name-para">
            The Sunnyside project is a responsive web application built to
            demonstrate modern front-end skills, including CSS Grid, Flexbox,
            and interactive UI components. It showcases design-to-development
            workflow, attention to typography, color, and layout consistency
            across devices
          </p>
          <button className="know-more-btn">
            Know more
            <img className="vector-icon" src={vector} alt="VectorImg" />
          </button>
        </div>

        <div className="work-name-section2">
          <h2 className="work-name">Profit Predictor</h2>
          <p className="work-name-para">
            Profit Predictor is a data-driven web application that calculates
            projected profits based on user inputs such as costs, pricing, and
            sales volume. Built with interactive UI components and real-time
            calculations, it demonstrates dynamic form handling, validation, and
            predictive logic.
          </p>
          <button className="know-more-btn">
            Know more
            <img className="vector-icon" src={vector} alt="VectorImg" />
          </button>
        </div>
      </section>
    </>
  );
}
