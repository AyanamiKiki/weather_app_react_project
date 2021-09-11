import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
<Weather />
    <footer> Open Source Code by:{" "}
    < a href="https://github.com/AyanamiKiki/weather_app_react_project" 
    target="_blank"
    rel="noreferrer">Ayanami Kiki
    </a>
    </footer>
    </div>
    </div>
  );
}


