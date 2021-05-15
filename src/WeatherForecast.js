import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Temperature.css";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="card-mb-3">
      <div className=" row no-gutters">
        <div className="col-4">
          <div className="WeatherForecastData"> Sun</div>
          <WeatherIcon
          img src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Sunny"
            width="36px"
            className="IconForecast"
            fontSize={1.5}
            //code={props.overview.icon}
            //alt={props.overview.description}
            
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
     //<WeatherForecastDay data={forecast[0]} />