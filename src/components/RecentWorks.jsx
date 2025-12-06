import React from "react";
import { useState } from "react";
import vector from "../images/vector.png";
import NavBar from "./NavBar";
import Button from "./Button";
import { Link } from "react-router-dom";
import recentWorkSlides from "./recentWorkSlide";

export default function RecentWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === recentWorkSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? recentWorkSlides.length - 1 : prev - 1
    );
  };

  const currentrecentWorkSlides = recentWorkSlides[currentIndex];

  return (
    <>
      <NavBar />

      <h1 className="recent-work-text">Recent Works</h1>

      <Button nextSlide={nextSlide} prevSlide={prevSlide} />

      <section className="sunnyside-container">
        <div className="sunnyside-section">
          <img
            className="sunnyside-img"
            src={currentrecentWorkSlides.image1}
            alt={currentrecentWorkSlides.image1}
          />
          <h2>{currentrecentWorkSlides.title1}</h2>
          <p className="sunnyside-para">
            {currentrecentWorkSlides.description1}
          </p>

          <div className="view-code-web-btns">
            <Link
              to={currentrecentWorkSlides.codeLink1}
              className="viewCode-btn"
              target="_blank"
            >
              View Code
              <img className="vector-icon" src={vector} alt="arrow icon" />
            </Link>

            <Link
              to={currentrecentWorkSlides.webLink1}
              className="viewWeb-btn"
              target="_blank"
            >
              View Website
              <img className="vector-icon" src={vector} alt="arrow icon" />
            </Link>
          </div>
        </div>

        <div className="profitPredictor-section">
          <img
            className="profitPredictor-img"
            src={currentrecentWorkSlides.image2}
            alt={currentrecentWorkSlides.image2}
          />
          <h2>{currentrecentWorkSlides.title2}</h2>
          <p className="profitPredictor-para">
            {currentrecentWorkSlides.description2}
          </p>

          <div className="view-code-web-btns">
            <Link
              to={currentrecentWorkSlides.codeLink2}
              className="viewCode-btn"
              target="_blank"
            >
              View Code
              <img className="vector-icon" src={vector} alt="arrow icon" />
            </Link>

            <Link
              to={currentrecentWorkSlides.webLink2}
              className="viewWeb-btn"
              target="_blank"
            >
              View Website
              <img className="vector-icon" src={vector} alt="arrow icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
