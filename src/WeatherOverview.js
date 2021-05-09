import React from "react";
import DayTemperature from "./DayTemperature";
import NightTemperature from "./NightTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherOverview(props) {
  return (
    <div>
      <WeatherIcon
        code={props.overview.icon}
        alt={props.overview.description}
      />
      <p className="text-capitalize">{props.overview.description}</p>
      <DayTemperature DayTemp={props.overview.dayTemp} />
      <NightTemperature NightTemp={props.overview.nightTemp} />
    </div>
  );
} 
