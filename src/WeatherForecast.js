import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

  export default function WeatherForecast(props) {
  let [loaded, setLoaded]= useState(false);
  let [forecast, setForecast]= useState(null);

  useEffect(() =>{
  setLoaded(false);
  },
  [props.coords]
  );

  function getForecast(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

    function load (){
     let apiKey = "d161f604274c06b1e5ec41b1728c9abc";
     let lat = props.coords.lat;
     let lon = props.coords.lon;
     let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apiKey}&units=metric`;
     axios.get(apiUrl).then(getForecast); 
  }
  if(loaded){
  return (
    <div>
        {forecast.map(function (dailyForecast, index){
          if (index > 0 && index < 6)
          {
          return(
             <div  key={index}>
        <WeatherForecastDay data={dailyForecast} />
      </div>
  );
    } else {
      return null;
    }
  })}
    </div>
  );
    }else{
    load();
    return null;
}
  }
