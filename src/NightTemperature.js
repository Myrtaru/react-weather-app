import React, { useState } from "react";
import "./Temperature.css";

export default function NightTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheitTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsiusTemp(event) {
    event.preventDefault();
    setUnit("celsius");
  }
function fahrenheitNight() {
  return (props.NightTemp * 9) / 5 + 32;
}
if (unit === "celsius") {
  return (
    <div className="NightTemperature">
      <strong>{props.NightTemp}</strong>
      <span className="Units">
        °C|
        <a href="/" className="Active" onClick={showFahrenheitTemp}>
          °F
        </a>
      </span>
    </div>
  );
} else {
  return (
    <div className="NightTemperature">
      <strong>{Math.round(fahrenheitNight())}</strong>
      <span className="Units">
        <a href="/" className="Active" onClick={showCelsiusTemp}>
          °C
        </a>
        |°F
      </span>
    </div>
  );
}
}
