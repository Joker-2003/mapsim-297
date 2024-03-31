import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SmoothScroll from "smooth-scroll";
import "./App.css";
import LandingPage from "./LandingPage";
import { DOCS_IS_OPEN } from "./components/navigation";
import Docs from "./Docs";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div className="App">
     <LandingPage />
    
    </div>
  );
};

export default App;
