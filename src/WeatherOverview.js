import React from "react";
import DayTemperature from "./DayTemperature";
import NightTemperature from "./NightTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherOverview.css";

export default function WeatherOverview(props) {
  return (
    <div className="WeatherOverview">
      <WeatherIcon
        code={props.overview.icon}
        alt={props.overview.description}
        style={{ fontSize: "4.5em" }}
      />
      <p className="text-capitalize">{props.overview.description}</p>
      <DayTemperature DayTemp={props.overview.dayTemp} />
      <NightTemperature NightTemp={props.overview.nightTemp} />
    </div>
  );
} 
