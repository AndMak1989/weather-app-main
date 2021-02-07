import React from "react";

import CurrentCachedWeather from "./CurrentCachedWeather";
import HourlyCachedWeather from "./HourlyCachedWeather";

interface WeatherProps {
  hours: number;
  city: any;
  cachedWeather:any
}

export const Weather: React.FC<WeatherProps> = ({
  hours,
  city,
  cachedWeather
}) => {
  return (
    <div>
      <CurrentCachedWeather city={city} cachedWeather={cachedWeather} />
      <HourlyCachedWeather
        city={city}
        hours={hours}
        cachedWeather={cachedWeather}
      />
    </div>
  );
};

export default Weather;
