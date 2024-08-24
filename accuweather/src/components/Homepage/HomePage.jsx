import { useState, useEffect } from "react";
import Layout from "../Layout";
import "./HomePage.css";

function HomePage() {
  const [forecastData, setForecastData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      const url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/28143?apikey=PvsDVBVgzpRPDIRRE6N36hkpqVatzO7V`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setForecastData(data.DailyForecasts[0]);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    const fetchCurrentWeather = async () => {
      const url = `http://dataservice.accuweather.com/currentconditions/v1/28143?apikey=PvsDVBVgzpRPDIRRE6N36hkpqVatzO7V&details=true`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setCurrentWeather(data[0]);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching current weather data:", error);
      }
    };

    fetchForecastData();
    fetchCurrentWeather();
  }, []);

  const today = new Date();
  const options = { month: "short", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <Layout>
      <div className="homepage-container">
        <div className="left-column">
          <div className="card today-weather">
            <h2>
              TODAYS WEATHER <span className="date">{formattedDate}</span>
            </h2>
            {forecastData ? (
              <>
                <p>
                  {forecastData.Day.IconPhrase}; high of{" "}
                  {forecastData.Temperature.Maximum.Value}°
                  {forecastData.Temperature.Maximum.Unit}
                </p>
                <p>
                  Tonight: {forecastData.Night.IconPhrase}; low of{" "}
                  {forecastData.Temperature.Minimum.Value}°
                  {forecastData.Temperature.Minimum.Unit}
                </p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <div className="card current-weather">
            <h2>Current Weather</h2>
            {currentWeather ? (
              <>
                <p className="time">
                  {new Date(
                    currentWeather.LocalObservationDateTime
                  ).toLocaleTimeString()}
                </p>
                <div className="weather-details">
                  <div className="temperature">
                    <img
                      src={`https://developer.accuweather.com/sites/default/files/${String(
                        currentWeather.WeatherIcon
                      ).padStart(2, "0")}-s.png`}
                      alt="Weather icon"
                      className="weather-icon"
                    />
                    <span>{currentWeather.Temperature.Metric.Value}°C</span>
                    <p>
                      RealFeel®{" "}
                      {currentWeather.RealFeelTemperature.Metric.Value}°C
                    </p>
                  </div>
                  <div className="additional-details">
                    <p>
                      RealFeel Shade™:{" "}
                      {currentWeather.RealFeelTemperatureShade.Metric.Value}°C
                    </p>
                    <p>
                      Wind: {currentWeather.Wind.Speed.Metric.Value}{" "}
                      {currentWeather.Wind.Speed.Metric.Unit}
                    </p>
                    <p>
                      Wind Gusts: {currentWeather.WindGust.Speed.Metric.Value}{" "}
                      {currentWeather.WindGust.Speed.Metric.Unit}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        <div className="right-column">
          <div className="card top-stories">
            <h2>Top Stories</h2>
            <ul>
              <li>
                <p>
                  2 killed, 100 evacuated as flash flooding hit parts of
                  Connecticut
                </p>
              </li>
              <li>
                <p>
                  UPS driver veers off road, crashes into tree due to extreme
                  heat
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
