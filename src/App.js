import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import City from "./Components/City";
import Weather from "./Components/Weather";

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
