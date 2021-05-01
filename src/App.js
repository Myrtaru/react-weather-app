import WeatherDates from "./WeatherData";
import WeatherOverview from "./WeatherOverview";
import WeatherForecast from "./WeatherForecast";
import background from "./img/copyright_kaikowetter.ch.jpg";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          className="card"
          style={{ backgroundImage: `url(${background})` }}
          alt="flash"
        >
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4">
                <WeatherOverview />
              </div>
              <div className="col-sm-4">
                <WeatherDates />
              </div>
              <div className="col-sm-4">
                <WeatherForecast />
                <WeatherForecast />
                <WeatherForecast />
                <WeatherForecast />
                <WeatherForecast />
              </div>
            </div>
          </div>
        </div>
        2021 by Myrta Rüegger.
        <span className="Footer">
          {` Open-source Code: `}
          <a
            href="https://github.com/Myrtaru/react-weather-app"
            target="-blank"
            rel="noopener noreferrer"
          >
            <u>GitHub,</u>
          </a>
          {` Hosting: `}
          <a
            href="https://practical-franklin-eaa232.netlify.app"
            target="-blank"
            rel="noopener noreferrer"
          >
            <u>Netlify</u>
          </a>
        </span>
      </div>
    </div>
  );
}
