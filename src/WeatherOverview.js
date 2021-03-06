import React from "react";
import DayTemperature from "./DayTemperature";
import NightTemperature from "./NightTemperature";
import "./WeatherOverview.css";

export default function WeatherOverview(props) {
  
  return (
    <div>
      <img
        className="IconOverview"
        src={"../img/" + props.overview.icon + ".svg"}
        alt="Weather Icon"
      />
      <p className="text-capitalize">{props.overview.description}</p>
      <DayTemperature dayTemp={props.overview.dayTemp} />
      <NightTemperature coords={props.overview.coords} />
    </div>
  );
}
