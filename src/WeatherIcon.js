import React from "react";
import * as Icon from 'react-bootstrap-icons';

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": <Icon.Sun />,
    "01n": <Icon.SunFill />,
    "02d": <Icon.CloudSun />,
    "02n": <Icon.CloudMoon />,
    "03d": <Icon.Cloudy />,
    "03n": <Icon.CloudyFill />,
    "04d": <Icon.Clouds />,
    "04n": <Icon.CloudsFill />,
    "09d": <Icon.CloudRain />,
    "09n": <Icon.CloudRainFill />,
    "10d": <Icon.CloudRainHeavy />,
    "10n": <Icon.CloudRainHeavyFill />,
    "11d": <Icon.CloudLightning />,
    "11n": <Icon.CloudLightningFill />,
    "13d": <Icon.CloudSnow />,
    "13n": <Icon.CloudSnowFill />,
    "50d": <Icon.CloudFog2 />,
    "50n": <Icon.CloudFog2Fill />
  };
  return (
    <span >
      {codeMapping[props.code]}
    </span>
  );
}
