import React, { useState, useEffect } from "react";
import "./App.css";
import Clock from "./Components/Clock";
import Greeting from "./Components/Greeting";
import DateDisplay from "./Components/DateDisplay";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="app">
      <Greeting />
      <DateDisplay />
      <div className="clock-container">
        <div className="clock-frame">
          <Clock />
        </div>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/muhammed-arslan-aa8808276/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Allahison" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Change_Theme
      </button>
    </div>
  );
}

export default App;
