import React from "react";
import "./Temperature.css";

export default function DayTemperature(props) {
  return (
    <div className="DayTemperature">
      <strong>{props.DayTemp}</strong>
      <span className="Units">
        <a href className="Active">
          °C|°F
        </a>
      </span>
    </div>
  );
}
