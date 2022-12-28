import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import City from "./Components/City";
import Weather from "./Components/Weather";

export const WeatherIcon = {
  "01d": "../Assets/icons/sunny.svg",
  "01n": "../Assets/icons/night.svg",
  "02d": "../Assets/icons/day.svg",
  "02n": "../Assets/icons/cloudy-night.svg",
  "03d": "../Assets/icons/cloudy.svg",
  "03n": "../Assets/icons/cloudy.svg",
  "04d": "../Assets/icons/perfect-day.svg",
  "04n": "../Assets/icons/cloudy-night.svg",
  "09d": "../Assets/icons/rain.svg",
  "09n": "../Assets/icons/rain-night.svg",
  "10d": "../Assets/icons/rain.svg",
  "10n": "../Assets/icons/rain-night.svg",
  "11d": "../Assets/icons/storm.svg",
  "11n": "../Assets/icons/storm.svg",
};

const API_KEY = "f8a070560de031ed38f1f9dc043d6cb1";

const App = () => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(res);
    updateWeather(res.data);
  };

  return (
    <div className="container">
      <p className="label">The Weather API</p>
      {weather ? (
        <Weather weather={weather} />
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
};

export default App;
