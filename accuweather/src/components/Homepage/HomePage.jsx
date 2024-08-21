import "./HomePage.css";
import Layout from "../Layout";

function HomePage() {
  return (
    <Layout>
      <div className="homepage-container">
        <div className="left-column">
          <div className="card today-weather">
            <h2>Todays Weather</h2>
            <p>
              Cloudy; a couple of thunderstorms around this morning followed by
              periods of rain and a thunderstorm this afternoon. Hi: 30°
            </p>
            <p>
              Tonight: Overcast; a couple of evening thunderstorms around
              followed by occasional rain and a thunderstorm late. Lo: 26°
            </p>
          </div>

          <div className="card current-weather">
            <h2>Current Weather</h2>
            <div className="weather-details">
              <div className="temperature">
                <span>28°</span>
                <p>RealFeel® 34°</p>
              </div>
              <div className="additional-details">
                <p>RealFeel Shade™: 34°</p>
                <p>Wind: SW 3 km/h</p>
                <p>Wind Gusts: 6 km/h</p>
                <p>Air Quality: Poor</p>
              </div>
            </div>
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
                <span>1 day ago</span>
              </li>
              <li>
                <p>
                  UPS driver veers off road, crashes into tree due to extreme
                  heat
                </p>
                <span>19 hours ago</span>
              </li>
              {/* Add more stories as needed */}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
