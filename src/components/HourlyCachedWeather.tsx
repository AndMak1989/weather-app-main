import React from "react";
import { HourWeather } from "../interfaces";

interface HourlyCachedWeatherProps {
  hours: number;
  cachedWeather: any;
  city: any;
}

export const HourlyCachedWeather: React.FC<HourlyCachedWeatherProps> = ({
  hours,
  cachedWeather,
  city
}) => {
  if (!city || !cachedWeather.data || !cachedWeather.data[city.value]) {
    return null;
  }

  if (cachedWeather.data && city) {
    let data = cachedWeather.data[city.value];
    const hourlyFiltered = data["hourly"].filter(
      (h: HourWeather, index: number) => {
        return index + (hours - 1) < 23;
      }
    );

    return (
      <div className="row d-flex justify-content-center">
        {hourlyFiltered.reverse().map((forecast: HourWeather) => {
          return (
            <div style={{ width: "15rem" }} className="card m5">
              <div className="card-header">Hourly Weather</div>
              <ul className="list-group list-group-flush">
                <li className="d-flex justify-content-space-between list-group-item">
                  <b>Temperature:</b>
                  {forecast.temp}
                </li>
                <li className="d-flex justify-content-space-between list-group-item">
                  <b>Feels like:</b>
                  {forecast.feels_like}
                </li>
                <li className="d-flex justify-content-space-between list-group-item">
                  <b>Humidity:</b>
                  {forecast.humidity}
                </li>
                <li className="d-flex justify-content-space-between list-group-item">
                  <b>Pressure:</b>
                  {forecast.pressure}
                </li>
                <li className="d-flex justify-content-space-between list-group-item">
                  <b>Clouds:</b>
                  {forecast.clouds}
                </li>
                <li className="d-flex justify-content-space-between list-group-item">
                  <b>Wind speed:</b>
                  {forecast.wind_speed}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
  return <></>;
};

export default HourlyCachedWeather;
