import React from "react";

import "./Temperature.css";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="card-mb-3">
      <div className=" row no-gutters">
        <div className="col-4">
          <div className="WeatherForecastDate"> Sun</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Sunny"
            width="36px"
          />
        </div>
        <div className="col-sm-8">
          <div className="WeatherForecastTemp">
            <span className="WeatherForecastTempMax">18°C |</span>
            <span className="WeatherForecastTempMin">3°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
