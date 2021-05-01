import React from "react";
import DayTemperature from "./DayTemperature";
import NightTemperature from "./NightTemperature";
import "./WeatherOverview.css";

export default function WeatherOverview() {
  return (
    <div className="WeatherOverview">
      <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="Few Clouds" />
      <p className="Description">Few Clouds</p>
      <DayTemperature />
      <NightTemperature />
    </div>
  );
}
