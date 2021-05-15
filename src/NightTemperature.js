import React, { useState, useEffect } from "react";
import axios from "axios";
import NightTempUnits from "./NightTempUnits";

export default function NightForecast(props) {
  let [nightloaded, setNightloaded] = useState(false);
  let [nightforecast, setNightforecast] = useState(null);

  useEffect(() => {
    setNightloaded(false);
  }, [props.coords]);

  function getNightforecast(response) {
    setNightforecast(response.data.daily);
    setNightloaded(true);
  }
  function nightload() {
    let apiKey = "d161f604274c06b1e5ec41b1728c9abc";
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getNightforecast);
  }
  if (nightloaded) {
    return (
      <div>
        {nightforecast.map(function (dailyNightforecast, index) {
          if (index === 0) {
            return (
              <div key={index}>
                <NightTempUnits nightdata={dailyNightforecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    nightload();
    return null;
  }
}
