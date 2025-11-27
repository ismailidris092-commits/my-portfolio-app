import React from "react";
import { Link } from "react-router-dom";

export default function RecentWork() {
  return (
    <>
      <Link className="recent-work-link" to="/">
        Home
      </Link>
      <div className="recent-work-container">
        <h1>Recent Work</h1>
        <p className="recent-work-para">
          Solving user & business problems since last 15+ years. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </>
  );
}
