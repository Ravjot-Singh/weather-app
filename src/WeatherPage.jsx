import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const WeatherPage = () => {

    const { city } = useParams();
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");


   
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
            'x-rapidapi-key': import.meta.env.VITE_API_KEY,
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


  return(
    <>

    <Navbar/>
    <div className="weather-page">
        {error && <p className="error-msg">{error}</p>}
        {weather && <Card {...weather} />}
    </div>

    </>
  )



}

export default WeatherPage

