import React from "react";

export default function ContactForm() {
  return (
    <div className="form-container">
      {/* Email */}
      <label className="form-label">Email</label>
      <input
        type="email"
        placeholder="Please enter your email"
        className="form-input"
      />

      {/* Mobile */}
      <label className="form-label">Mobile</label>
      <input
        type="number"
        placeholder="Enter mobile"
        className="form-input"
      />

      {/* Message */}
      <label className="form-label">Message</label>
      <textarea
        placeholder="Enter your message"
        className="form-textarea"
      ></textarea>
    </div>
  );
}
