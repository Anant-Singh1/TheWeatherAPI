import React from "react";
import "./City.css";
import weatherlogo from "../Assets/icons/perfect-day.svg";

const City = ({ updateCity, fetchWeather }) => {
  return (
    <div className="city">
      <img className="wlogo" src={weatherlogo} alt="perfect-day" />
      <h2>Search Your City Weather</h2>
      <form onSubmit={fetchWeather} className="searchbox">
        <input
          type="text"
          placeholder="eg Dehradun"
          onChange={(x) => updateCity(x.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default City;
