import React from "react";
import "./WeatherIcon.css";


export default function WeatherOverview(props) {
  
return <img src={"../img/" + props.code + ".svg"} alt="Weather Icon" />;
}
