import React from "react";
import "./Weather.css";
// import weatherlogo from "../Assets/icons/perfect-day.svg";
// import infoicon from "../Assets/icons/temperature.svg";
import sunrise from "../Assets/icons/sunrise.svg";
import sunset from "../Assets/icons/sunset.svg";
import humidity from "../Assets/icons/humidity.svg";
import wind from "../Assets/icons/wind.svg";
import pressure from "../Assets/icons/pressure.svg";
import { WeatherIcon } from "../App";

const WeatherInfo = ({ name, value, icon }) => {
  return (
    <div className="info-container">
      <img className="infoicon" src={icon} alt="info-icon" />
      <span className="infolabel">
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};

const Weather = ({ weather }) => {
  const isDay = weather?.weather[0].icon.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      <div className="weather">
        <span className="condition">
          <span>{`${Math.floor(weather.main.temp - 273)} C`}</span>
          {`| ${weather.weather[0].description}`}
        </span>
        <img
          src={WeatherIcon[weather.weather[0].icon]}
          className="weatherlogo"
          alt="All...day"
        />
      </div>
      <span className="location">{`${weather.name},${weather.sys.country}`}</span>
      <span className="weather-info-label">Weather Info</span>
      <div className="weather-info-container">
        <WeatherInfo
          name={isDay ? "Sunset" : "Sunrise"}
          value={getTime(weather.sys[isDay ? "Sunset" : "Sunrise"])}
          icon={isDay ? sunset : sunrise}
        />
        <WeatherInfo name="wind" value={weather.wind.speed} icon={wind} />
        <WeatherInfo
          name="humidity"
          value={weather.main.humidity}
          icon={humidity}
        />
        <WeatherInfo
          name="pressure"
          value={weather.main.pressure}
          icon={pressure}
        />
      </div>
    </>
  );
};

export default Weather;
