import React from "react";
import Search from "./Search";
import "./WeatherData.css";
import "./Search.css";

export default function Weatherdates() {
  return (
    <ul>
      <li>Last Update:</li>
      <p className="ActualDay"> Friday</p>
      <li> 30.04.2021 10:53 </li>
      <h1> Zurich </h1>
      <li>Humidity: 25%</li>
      <li>Wind: 12 km/h</li>
      <Search />
    </ul>
  );
}
