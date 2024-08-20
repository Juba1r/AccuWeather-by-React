import { useState } from "react";
import {
  FaSearch,
  FaBars,
  FaSun,
  FaChevronDown,
  FaCloud,
} from "react-icons/fa";
import "./Navbar.css";

function WeatherNavbar() {
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!isLocationDropdownOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-brand">
          <FaSun className="navbar-icon" />
          <span className="navbar-title">AccuWeather</span>
          <div className="weather-info">
            <p className="h3-title">Dhaka,Dhaka 30°C</p>
            <FaCloud className="weather-icon" />
          </div>
        </div>

        <div className="search-location-container">
          <div className="search-input-group">
            <span className="search-icon">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Address, City, or Zip code"
              className="search-input"
            />
            <div className="location-dropdown" onClick={toggleLocationDropdown}>
              <span className="location-dropdown-text">Location</span>
              <FaChevronDown
                className={`location-dropdown-icon ${
                  isLocationDropdownOpen ? "rotate" : ""
                }`}
              />
              {isLocationDropdownOpen && (
                <div className="location-dropdown-menu">
                  <a href="#">Location</a>
                  <a href="#">News</a>
                  <a href="#">Videos</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="dropdown-container">
          <FaBars className="dropdown-icon" />
          <div className="dropdown-menu">
            <a href="#">Action 1</a>
            <a href="#">Action 2</a>
            <a href="#">Action 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherNavbar;
