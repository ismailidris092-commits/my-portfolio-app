import React from "react";
import vector from "../images/vector.png";
import { useState } from "react";

export default function ContactForm() {
  const [userEmail, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userMessage, setUserMessage] = useState("");

  function handleUserEmailInput(e) {
    setUserName(e.target.value);
  }

  function handleUserMobileInput(e) {
    setUserMobile(e.target.value);
  }

  function handleUserMessageInput(e) {
    setUserMessage(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setUserName("");
    setUserMobile("");
    setUserMessage("");
  }

  return (
    <form className="form-container">
      {/* Email */}
      <label htmlFor="email" className="form-label">
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Please enter your email"
        className="form-input"
        onChange={(e) => {
          handleUserEmailInput(e);
        }}
      />

      {/* Mobile */}
      <label htmlFor="mobile" className="form-label">
        Mobile:
      </label>
      <input
        type="tel"
        name="mobile"
        id="mobile"
        placeholder="Enter mobile"
        className="form-input"
        onChange={(e) => {
          handleUserMobileInput(e);
        }}
      />

      {/* Message */}
      <label htmlFor="message" className="form-label">
        Message:
      </label>
      <textarea
        placeholder="Enter your message"
        id="message"
        name="message"
        className="form-text-area"
        onChange={(e) => {
          handleUserMessageInput(e);
        }}
      ></textarea>

      <button className="submit-btn">
        Submit
        <img className="vector-icon" src={vector} alt="VectorImg" />
      </button>
    </form>
  );
}