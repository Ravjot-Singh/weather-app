import { useState } from 'react';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import './App.css'

const App = () => {
  const [cityName, setCityName] = useState(() => {
    return localStorage.getItem("cityName") || "";
  });

  const navigate = useNavigate();

  const handleSearch = (city) => {
    navigate(`/weather/${city}`);
  };

  return (
    <>
      <Navbar
        cityName={cityName}
        setCityName={setCityName}
        onSearch={handleSearch}
      />

      <div className="weather-home">
        <section className="hero">
          <h1 className="hero-title">
            Explore Weather Now
            <img
              src="/moving.gif"
              alt="Cloud Animation"
              className="hero-icon"
            />
          </h1>
          <p className="hero-subtitle">
            Get instant weather updates for any city. Track temperature,
            humidity, and more!
          </p>
          <div className="hero-buttons">
            <button className="btn" onClick={() => handleSearch(cityName)}>
              Start Searching
            </button>
            <button className="btn">Learn More</button>
          </div>
        </section>

        <div className="divider"></div>

        <section className="features">
          <h2 className="section-title">Why use our Weather App?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <img
                src="/temperature.jpeg"
                alt="Temperature"
                className="feature-icon"
              />
              <p>✔ Real-time Temperature</p>
            </div>
            <div className="feature-item">
              <img
                src="/humidity.jpeg"
                alt="Humidity"
                className="feature-icon"
              />
              <p>✔ Accurate Humidity Info</p>
            </div>
            <div className="feature-item">
              <img
                src="/wind.jpeg"
                alt="Wind"
                className="feature-icon"
              />
              <p>✔ Wind Speed Tracking</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
