import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import RecentWork from "./components/RecentWork";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Case Studies" element={<CaseStudies />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Recent Work" element={<RecentWork />} />
          <Route path="/Get In Touch" element={<GetInTouch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
