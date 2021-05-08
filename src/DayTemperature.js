import React,{useState} from "react";
import "./Temperature.css";

export default function DayTemperature(props) {
  const [unit, setUnit] = useState ("celsius");
  function showFahrenheitTemp(event) {
  event.preventDefault();
  setUnit("fahrenheit");
 }
 function showCelsiusTemp(event) {
   event.preventDefault();
   setUnit("celsius");
 }
function fahrenheit () {
  return (props.DayTemp * 9) / 5 + 32;
}
  if (unit === "celsius"){
  return (
    <div className="DayTemperature">
      <strong>{props.DayTemp}</strong>
      <span className="Units">
        °C|
        <a href="/" className="Active" onClick={showFahrenheitTemp}>
          °F
        </a>
      </span>
    </div>
  );
} else {
return(
   <div className="DayTemperature">
      <strong>{Math.round(fahrenheit())}</strong>
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
