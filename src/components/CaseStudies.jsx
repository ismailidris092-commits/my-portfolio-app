import React from "react";
import { Link } from "react-router-dom";
import vector from "../images/vector.png";
import fintechImg from "../images/fintechImg.png";
import edtechImg from "../images/edtechImg.png";
import pharmaImg from "../images/pharmaImg.png";

function CaseStudies() {
  return (
    <>
      <Link className="link-to" to="/">
        Home
      </Link>
      <div className="case-studies-container">
        <h1>Case Studies</h1>
        <p className="case-studies-para">
          Solving user & business problems since last 15+ years. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <section className="fintech-container">
        <div className="fintech-section">
          <button className="fintech-btn">Fintech</button>
          <h2 className="work-name">Work name here</h2>
          <p className="work-name-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button className="case-study-btn-one">
            View case study
            <img className="vector-icon" src={vector} alt="VectorImg" />
          </button>
        </div>
        <img src={fintechImg} alt="FintechImg" />
      </section>

      <section className="edTech-container">
        <img src={edtechImg} alt="EdtechImg" />
        <div className="edtech-section">
          <button className="edtech-btn">Edtech</button>
          <h2 className="work-name">Work name here</h2>
          <p className="work-name-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button className="case-study-btn-two">View case study</button>
        </div>
      </section>

      <section className="pharma-container">
        <div className="pharma-section">
          <button className="pharma-btn">Pharma</button>
          <h2 className="work-name">Work name here</h2>
          <p className="work-name-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button className="case-study-btn-three">
            View case study
            <img className="vector-icon" src={vector} alt="VectorImg" />
          </button>
        </div>
        <img src={pharmaImg} alt="PharmaImg" />
      </section>
    </>
  );
}

export default CaseStudies;
