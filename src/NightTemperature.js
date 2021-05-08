import React from "react";
import "./Temperature.css";

export default function DayTemperature(props) {
  return (
    <div className="NightTemperature">
      {props.NightTemp}
      <span className="Units">°C</span>
    </div>
  );
}
