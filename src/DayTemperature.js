import React from "react";
import "./Temperature.css";

export default function DayTemperature() {
  return (
    <div className="DayTemperature">
      <strong> 14</strong>
      <span className="Units">
        <a href className="Active">
          °C|°F
        </a>
      </span>
    </div>
  );
}
