import React from "react";
import DayTemperature from "./DayTemperature";
import NightTemperature from "./NightTemperature";
import "./WeatherOverview.css";

export default function WeatherOverview(props) {
  return (
    <div className="WeatherOverview">
      <img src={props.icon} alt="Weather Icon" />
      <p className="text-capitalize">{props.description}</p>
      <DayTemperature DayTemp={props.temperature} />
      <NightTemperature NightTemp={props.temperature} />
    </div>
  );
} 
