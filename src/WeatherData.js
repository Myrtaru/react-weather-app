import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherOverview from "./WeatherOverview";
import WeatherForecast from "./WeatherForecast";
import "./WeatherData.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({charged: false});
     function showWeather(response) {
       setWeatherData({
       city: response.data.name,
       temperature: Math.round(response.data.main.temp),
       description: response.data.weather[0].description,
       charged: true,
       date: new Date(response.data.dt *1000),       
       humidity: response.data.main.humidity,
       wind: response.data.wind.speed,
       icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
      }
       if (weatherData.charged) {
  return (
    <div className="row">
      <div className="col-sm-4">
        <WeatherOverview
          icon={weatherData.icon}
          description={weatherData.description}
          DayTemperature={weatherData.temperature}
          NightTemperture={weatherData.temperature}
        />
      </div>
       <div className="col-sm-4">
          <ul>
            <li>Last Update:</li>
            <p className="ActualDay"> Friday</p>
            <li>
              <FormatDate date={weatherData.date} />
            </li>
            <h1> {weatherData.city} </h1>
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Wind: {Math.round(3.6 * weatherData.wind)} km/h</li>
            <input
              className="search-form"
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
            />
            <button type="submit" className="Button">
              Search
            </button>
          </ul>
        </div>
        <div className="col-sm-4">
          <WeatherForecast />
          <WeatherForecast />
          <WeatherForecast />
          <WeatherForecast />
          <WeatherForecast />
        </div>
      </div>
  );  
} else {
   const apiKey = "d161f604274c06b1e5ec41b1728c9abc";
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(showWeather);
   return "loading...";
  }
}