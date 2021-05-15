import React from "react";
import WeatherData from "./WeatherData";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div
          className="card"
          style={{
            backgroundImage: `url(${"../img/copyright_kaikowetter.ch.jpg"
            })`,
            alt: "flash",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="card-body">
            <WeatherData defaultCity="Zurich" />
          </div>
        </div>
        2021 by Myrta Rüegger.
        <span className="Footer">
          {` Open-source Code: `}
          <a
            href="https://github.com/Myrtaru/react-weather-app"
            target="-blank"
            rel="noopener noreferrer"
          >
            <u>GitHub,</u>
          </a>
          {` Hosting: `}
          <a
            href="https://naughty-ramanujan-a4574f.netlify.app/"
            target="-blank"
            rel="noopener noreferrer"
          >
            <u>Netlify</u>
          </a>
        </span>
      </div>
    </div>
  );
}
