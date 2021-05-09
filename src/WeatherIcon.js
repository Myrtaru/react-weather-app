import React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./WeatherIcon.css";
export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": <Icon.SunFill className="IconSun" />,
    "01n": <Icon.MoonStarsFill className="IconMoonStars" />,
    "02d": <Icon.CloudSun />,
    "02n": <Icon.CloudMoon />,
    "03d": <Icon.CloudsFill className="IconClouds" />,
    "03n": <Icon.CloudsFill className="IconClouds" />,
    "04d": <Icon.CloudsFill />,
    "04n": <Icon.CloudsFill />,
    "09d": <Icon.CloudRainFill />,
    "09n": <Icon.CloudRainFill />,
    "10d": <Icon.CloudRainHeavyFill />,
    "10n": <Icon.CloudRainHeavyFill />,
    "11d": <Icon.CloudLightningFill />,
    "11n": <Icon.CloudLightningFill />,
    "13d": <Icon.CloudSnowFill className="IconSnow" />,
    "13n": <Icon.CloudSnowFill className="IconSnow" />,
    "50d": <Icon.CloudHaze2Fill />,
    "50n": <Icon.CloudHaze2Fill />,
  };
  return <span className="IconOverview">
    {codeMapping[props.code]}</span>;
}
