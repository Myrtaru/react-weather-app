import React from "react";
import "./Temperature.css";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {

  function minTemp(){
let tempMin = Math.round(props.data.temp.min);
return ` ${tempMin}°C`;
  }
   function maxTemp(){
let tempMax = Math.round(props.data.temp.max);
return `${tempMax}°`;
  }

function ForecastDay(){
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}
  return (
    <div>
      <div className="card-mb-3">
        <div className=" row no-gutters">
          <div className="col-4">
            <div className="WeatherForecastData">{ForecastDay()}</div>
            <img
              className="IconForecast"
              src={"../img/" + props.data.weather[0].icon + ".svg"}
              alt="Weather Icon"
            />
          </div>
          <div className="col-sm-8">
            <div className="WeatherForecastTemp">
              <span className="WeatherForecastTempMax">{maxTemp()}|</span>
              <span className="WeatherForecastTempMin">{minTemp()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
