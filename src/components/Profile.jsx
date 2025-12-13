import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";
import nextJs from "../images/nextJs.png";
import profileImg from "../images/profileImg.jpg";
import vector from "../images/vector.png";
import NavBar from "./NavBar";
import "./Carousel.css";

function Profile() {
  return (
    <div className="profile-container-body">
      <NavBar />
      <section className="profile-container">
        <div className="profile">
          <h1>Ismail Idris</h1>
          <p className="profile-para">
            A passionate web developer who loves creating beautiful, responsive
            websites and apps. I enjoy solving problems, learning new
            technologies, and bringing ideas to life on the web.
          </p>
          <button className="profile-start-btn">
            Let’s get started
            <img className="vector-icon" src={vector} alt="VectorImg" />
          </button>
        </div>

        <div className="profile-img">
          <img src={profileImg} alt="ProfileImg" />
        </div>
      </section>

      <div className="work-with-logo-container">
        <p className="work-with-text">Worked with</p>

        <div className="carousel-container">
          <div className="carousel-track">
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={javascript} alt="javascript" />
            <img src={tailwind} alt="tailwind" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={nextJs} alt="nextjs" />

            {/* Duplicate images for seamless loop */}
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={javascript} alt="javascript" />
            <img src={tailwind} alt="tailwind" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={nextJs} alt="nextjs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
