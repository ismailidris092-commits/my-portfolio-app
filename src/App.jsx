import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import RecentWorks from "./components/RecentWorks";
import GetInTouch from "./components/GetInTouch";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About Me" element={<AboutMe />} />
          <Route path="/Recent Works" element={<RecentWorks />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Get In Touch" element={<GetInTouch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
