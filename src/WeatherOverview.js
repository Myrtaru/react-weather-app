import React from "react";
import DayTemperature from "./DayTemperature";
import NightTemperature from "./NightTemperature";
import "./WeatherOverview.css";

export default function WeatherOverview(props) {
  return (
    <div className="WeatherOverview">
      <img src={props.overview.icon} alt="Weather Icon" />
      <p className="text-capitalize">{props.overview.description}</p>
      <DayTemperature DayTemp={props.overview.dayTemp} />
      <NightTemperature NightTemp={props.overview.nightTemp} />
    </div>
  );
} 
