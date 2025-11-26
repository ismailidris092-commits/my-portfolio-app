import React from "react";
import clickup from "../images/clickup.png";
import dropbox from "../images/dropbox.png";
import paychex from "../images/paychex.png";
import elastic from "../images/elastic.png";
import stripe from "../images/stripe.png";
import profileImg from "../images/profileImg.png";

function Profile() {
  return (
    <>
      <section className="profile-container">
        <div className="profile">
          <h1>Your Name Here</h1>
          <p className="profile-para">
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="profile-start-btn">
            Let’s get started 
          </button>
        </div>

        <div className="profile-img">
          <img src={profileImg} alt="ProfileImg" />
        </div>
      </section>

      <div className="work-with-section">
        <p className="work-with-text">Worked with</p>

        <div className="work-with-icon-container">
          <img className="work-with-icon" src={clickup} alt="ClickUp" />
          <img className="work-with-icon" src={dropbox} alt="Dropbox" />
          <img className="work-with-icon" src={paychex} alt="Paychex" />
          <img className="work-with-icon" src={elastic} alt="Elastic" />
          <img className="work-with-icon" src={stripe} alt="Stripe" />
        </div>
      </div>
    </>
  );
}

export default Profile;
