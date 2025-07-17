const descriptionImages = {
  "clear sky": "/sunny.jpg",  //done
  "few clouds": "/few-clouds.png",  // done
  "scattered clouds": "/scattered-clouds.jpeg",  //done
  "shower rain": "/shower-rain.jpeg", //done
  "rain": "/rainy.jpg",  // done
  "thunderstorm": "/thunder.jpg",  //done
  "snow": "/snow.jpeg",  //done
  "mist": "/mist.jpeg", // done
  "light intensity drizzle": "/drizzle.png",
  "haze":"/hazey.jpg"  //done
};

const Card = ({ city, temperature, description, humidity, windSpeed, icon }) => {
  const imageUrl = descriptionImages[description.toLowerCase()] || `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <div className="weather-main">
        <img
          src={imageUrl}
          alt={description}
          className="weather-icon"
        />
        <div className="weather-temp">{temperature}°C</div>
      </div>
      <p className="weather-desc">{description}</p>
      <div className="weather-details">
        <p><strong>Humidity:</strong> {humidity}%</p>
        <p><strong>Wind Speed:</strong> {windSpeed} m/s</p>
      </div>
    </div>
  );
};

export default Card
