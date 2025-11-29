import React from "react";
import clickup from "../images/clickup.png";
import dropbox from "../images/dropbox.png";
import paychex from "../images/paychex.png";
import elastic from "../images/elastic.png";
import stripe from "../images/stripe.png";
import profileImg from "../images/profileImg.png";
import vector from "../images/vector.png";

function Profile() {
  return (
    <div className="profile-container-body">
      <section className="profile-container">
        <div className="profile">
          <h1>Ismail Idris</h1>
          <p className="profile-para">
            A passionate web developer who loves creating
            beautiful, responsive websites and apps. I enjoy solving problems,
            learning new technologies, and bringing ideas to life on the web.
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

      <div className="work-with-section">
        <p className="work-with-text">Worked with</p>

        <div className="work-with-logo-container">
          <img className="work-with-logo" src={clickup} alt="ClickUp" />
          <img className="work-with-logo" src={dropbox} alt="Dropbox" />
          <img className="work-with-logo" src={paychex} alt="Paychex" />
          <img className="work-with-logo" src={elastic} alt="Elastic" />
          <img className="work-with-logo" src={stripe} alt="Stripe" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
