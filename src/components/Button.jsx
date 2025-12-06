import React from "react";
import iconAngleLeft from "../images/icon-angle-left.svg";
import iconAngleRight from "../images/icon-angle-right.svg";

export default function Button({ nextSlide, prevSlide }) {
  return (
    <div className="icon-angle-container">
      <button className="icon-angle-left" onClick={prevSlide}>
        <img src={iconAngleLeft} alt="left" />
      </button>

      <button className="icon-angle-right" onClick={nextSlide}>
        <img src={iconAngleRight} alt="right" />
      </button>
    </div>
  );
}
