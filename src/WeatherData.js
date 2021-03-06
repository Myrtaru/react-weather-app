import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherOverview from "./WeatherOverview";
import WeatherForecast from "./WeatherForecast";
import "./WeatherData.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coords:response.data.coord,
      dayTemp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }
  function searchCity() {
    const apiKey = "d161f604274c06b1e5ec41b1728c9abc";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function submitSearch(event) {
    event.preventDefault();
    searchCity();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-sm-4">
          <WeatherOverview overview={weatherData} />
        </div>
        <div className="col-sm-4">
          <ul>
            <li>Last updated:</li>
            <li>
              <FormatDate date={weatherData.date} />
            </li>
            <h1> {weatherData.city} </h1>
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Wind: {Math.round(3.6 * weatherData.wind)} km/h</li>
            <form onSubmit={submitSearch}>
              <input
                className="search-form"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                onChange={updateCity}
              />
              <button type="submit" className="Button">
                Search
              </button>
            </form>
          </ul>
        </div>
        <div className="col-sm-4">
          <WeatherForecast coords={weatherData.coords} />
        </div>
      </div>
    );
  } else {
    searchCity();
    return "loading...";
  }
}
