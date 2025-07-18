import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const WeatherPage = () => {

  const { city } = useParams();
  const navigate = useNavigate();

  const [cityName, setCityName] = useState(() => localStorage.getItem("cityName") || "");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (city) => {
    navigate(`/weather/${city}`);
  };



  useEffect(() => {
    const fetchData = async () => {


      const options = {
        method: 'GET',
        url: 'https://open-weather13.p.rapidapi.com/city',
        params: {
          city: city,
          lang: 'EN'
        },
        headers: {
          'x-rapidapi-key': '39cf272cc6msh26f6ad7f6a825e8p1e1462jsn94e9bfe697d8',
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
      };


      try {
        const response = await axios.request(options);
        const data = response.data;
        setWeather({
          city: data.name,
          temperature: Math.round((data.main.temp - 32) * 5 / 9),
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: data.weather[0].icon
        });
      } catch (err) {
        setError("City not found or API error.");
      }
    };
    fetchData();
  }, [city]);


  return (
    <>

      <Navbar
        cityName={cityName}
        setCityName={setCityName}
        onSearch={handleSearch}
      />
      <div className="weather-page">
        {error && <p className="error-msg">{error}</p>}
        {weather && <Card {...weather} />}
      </div>

    </>
  )



}

export default WeatherPage

