import React from "react";
import "./Weather.css";

import sunrise from "../Assets/icons/sunrise.svg";
import sunset from "../Assets/icons/sunset.svg";
import humidity from "../Assets/icons/humidity.svg";
import wind from "../Assets/icons/wind.svg";
import pressure from "../Assets/icons/pressure.svg";

import cloudynight from "../Assets/icons/cloudy-night.svg";
import sunny from "../Assets/icons/sunny.svg";
import night from "../Assets/icons/sunny.svg";
import cloudy from "../Assets/icons/cloudy.svg";
import day from "../Assets/icons/day.svg";
import rain from "../Assets/icons/rain.svg";
import rainnight from "../Assets/icons/rain-night.svg";
import storm from "../Assets/icons/storm.svg";
import perfectday from "../Assets/icons/perfect-day.svg";

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
  const getIcon = () => {
    const wth = weather.weather[0].icon;
    if (wth === "01d") return sunny;
    else if (wth === "01n") return night;
    else if (wth === "02d") return day;
    else if (wth === "02n" || wth === "04n") return cloudynight;
    else if (wth === "03d" || wth === "03n") return cloudy;
    else if (wth === "04d") return perfectday;
    else if (wth === "09d" || wth === "10d") return rain;
    else if (wth === "09n" || wth === "10n") return rainnight;
    else return storm;
  };
  const isDay = weather?.weather[0].icon.includes("d");

  return (
    <>
      <div className="weather">
        <span className="condition">
          <span>{`${Math.floor(weather.main.temp - 273)}℃`}</span>
          {` | ${weather.weather[0].description}`}
        </span>
        <img src={getIcon()} className="weather-logo" alt="All...day" />
      </div>
      <span className="location">{`${weather.name},${weather.sys.country}`}</span>
      <span className="weather-info-label">Weather Info</span>
      <div className="weather-info-container">
        <WeatherInfo
          name={isDay ? "Sunset" : "Sunrise"}
          // value={getTime(weather.sys[isDay ? "Sunset" : "Sunrise"])}
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
