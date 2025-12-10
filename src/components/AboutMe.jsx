import React from "react";
import vector from "../images/vector.png";
import pharmaImg from "../images/pharmaImg.png";
import NavBar from "./NavBar";

function AboutMe() {
  return (
    <section className="aboutMe-container">
      <NavBar />

      <h1>About Me</h1>

      <div className="aboutMe-section">
        <img src={pharmaImg} alt="PharmaImg" />

        <div className="para-container">
          <p className="aboutMe-para">
            I am a dedicated and detail-oriented front-end web developer with
            years of professional experience designing and building responsive,
            accessible, and high-performance web interfaces. I specialize in
            translating visual designs and product requirements into
            maintainable, production-ready applications using modern front-end
            ecosystems.
          </p>

          <p className="aboutMe-para">
            My expertise includes CSS, modern JavaScript (ES6+), and
            component-driven development with React. I have practical experience
            with Vite for fast development builds and Next.js for server-side
            rendering and static site generation.
          </p>

          <p className="aboutMe-para">
            I collaborate closely with designers and backend engineers to
            deliver polished user interfaces, using version control (Git/GitHub)
            and automated testing to ensure reliability in production.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
