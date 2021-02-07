import React, { useState } from "react";
import Spinner from "./Spinner";

interface CurrentCachedWeatherProps {
  cachedWeather: any;
  city: any;
}

export const CurrentCachedWeather: React.FC<CurrentCachedWeatherProps> = ({
  cachedWeather,
  city
}) => {
  let { loading, error } = cachedWeather;

  if (loading) {
    return <Spinner />;
  }

  if (cachedWeather.data && city) {
    let data = cachedWeather.data[city.value];

    console.log({ data, cachedWeather, city });

    return (
      <div className="d-flex justify-content-center mb20">
        <div style={{ width: "20rem" }} className="card">
          <div className="card-header">Current Weather</div>
          <ul className="list-group list-group-flush">
            <li className="d-flex justify-content-space-between list-group-item">
              <b>Temperature:</b>
              {data.current.temp}
            </li>
            <li className="d-flex justify-content-space-between list-group-item">
              <b>Feels like:</b>
              {data.current.feels_like}
            </li>
            <li className="d-flex justify-content-space-between list-group-item">
              <b>Humidity:</b>
              {data.current.humidity}
            </li>
            <li className="d-flex justify-content-space-between list-group-item">
              <b>Pressure:</b>
              {data.current.pressure}
            </li>
            <li className="d-flex justify-content-space-between list-group-item">
              <b>Clouds:</b>
              {data.current.clouds}
            </li>
            <li className="d-flex justify-content-space-between list-group-item">
              <b>Wind speed:</b>
              {data.current.wind_speed}
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return null;
};

export default CurrentCachedWeather;
