import React from "react";
import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";
import client4 from "../images/client4.png";
import NavBar from "./NavBar";

function Reviews() {
  return (
    <>
      <div className="testimonials-container">
        <NavBar />
        <h1>User Experience Reviews</h1>
        <p className="testimonials-para">
          We value feedback from our users and continuously improve our services
          based on their experiences.
        </p>
      </div>

      <section className="client-section1">
        <div className="client1-container">
          {/* <div className="quote-icon">❝</div> */}
          <p className="client1-para">
            A highly skilled and reliable web developer who delivers clean,
            responsive, and modern designs. Communication was excellent, and the
            final product exceeded expectations.
          </p>
          <div className="client1-Img-section">
            <img src={client1} alt="Client 1" />
            <h2>Lanre Adeolu (Senior dev)</h2>
          </div>
        </div>

        <div className="client2-container">
          <p className="client2-para">
            Working with this developer was a great experience from start to
            finish. He understood the project requirements clearly, delivered
            ahead of schedule, and created a fast, responsive, and visually
            appealing website.
          </p>
          <div className="client2-Img-section">
            <img src={client2} alt="Client 2" />
            <h2>Fawzino (Coming up dev)</h2>
          </div>
        </div>
      </section>

      <section className="client-section2">
        <div className="client3-container">
          <p className="client3-para">
            An outstanding web developer with a deep understanding of modern web
            technologies. He brought creative ideas to the table and transformed
            our vision into a beautiful, functional, and user-friendly website.
          </p>
          <div className="client3-Img-section">
            <img src={client3} alt="Client 3" />
            <h2>Oreoluwa(Up dev)</h2>
          </div>
        </div>

        <div className="client4-container">
          <p className="client4-para">
            Reliable, creative, and highly skilled. Delivered a seamless and
            responsive website with excellent performance and user experience..
          </p>
          <div className="client4-Img-section">
            <img src={client4} alt="Client 4" />
            <h2>Anonymous</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
