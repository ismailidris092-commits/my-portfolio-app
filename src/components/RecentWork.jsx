import React from "react";
import { Link } from "react-router-dom";
import recentWorkImg1 from "../images/recentWorkImg1.png";
import recentWorkImg2 from "../images/recentWorkImg2.png";
import vector from "../images/vector.png";
import NavBar from "./NavBar";

export default function RecentWork() {
  return (
    <>
      {/* <div className="caseStudies-nav-link">
        <Link to="/">Home</Link>
        <Link to="/Case Studies">Case Studies</Link>
        <Link to="/Testimonials">Testimonials</Link>
        <Link to="/Recent Work">Recent Work</Link>
        <Link to="/Get In Touch">Get In Touch</Link>
      </div> */}

      <NavBar />

      <div className="recent-work-container">
        <h1>Recent Work</h1>
        <p className="recent-work-para">
          Solving user & business problems since last 15+ years. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="recentworkImg-container">
        <img
          className="recentWorkImg1"
          src={recentWorkImg1}
          alt=" Recent work Img1"
        />
        <img src={recentWorkImg2} alt=" Recent work Img2" />
      </div>

      <section className="work-name-container">
        <div className="work-name-section1">
          <h2 className="work-name">Work name here</h2>
          <p className="work-name-para">
            Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
          <button className="know-more-btn">
            Know more
            <img className="vector-icon" src={vector} alt="VectorImg" />
          </button>
        </div>

        <div className="work-name-section2">
          <h2 className="work-name">Work name here</h2>
          <p className="work-name-para">
            Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod
            tempor incididunt u
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
